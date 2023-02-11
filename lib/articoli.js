import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getDatiArticoli(anno = '2022') {
  const cartellaArticoli = path.join(process.cwd(), 'articoli' + '/' + anno);

  const fileNames = fs.readdirSync(cartellaArticoli);
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
  });
}