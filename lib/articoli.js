import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const cartellaArticoli = path.join(process.cwd(), 'articoli');

export function getDatiArticoli(n = 4) {
    const fileNames = fs.readdirSync(cartellaArticoli).filter((filename) => filename.match(/.*\.(md)/ig));
    const datiArticoli = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(cartellaArticoli, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Ordina gli articoli per data decrescente (prima i più recenti)
    return datiArticoli.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    }).slice(0, n);
}

export function getIdArticoli() {
    const fileNames = fs.readdirSync(cartellaArticoli).filter((filename) => filename.match(/.*\.(md)/ig));

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getDatiArticolo(id) {
    const fullPath = path.join(cartellaArticoli, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}