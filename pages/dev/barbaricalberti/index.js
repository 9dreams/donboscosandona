import LandingHero from "/dev/barbaricalbertic/LandingHero"

let menu = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
]

export default function Pagina() {
    return (
        <>
            <LandingHero
                opacity={0.7}
                siteName="CFP DON BOSCO"
                title="Your Story Starts With Us."
                description="Every landing page needs a small description......."
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="guarda il video"
                imageUrl="https://cdn.we-wealth.com/-/media/Images/summary/college-americani-il-non-aumento-delle-tasse-e-da-record.png?rev=dec6c04ac7904e55b50eef5485cd67fb&modified=20210830131241"
                menu={menu}
            />
        </>
    )
}


