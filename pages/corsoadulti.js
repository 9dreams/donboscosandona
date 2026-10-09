import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Products from '/components/Products'
import { Intro, Section, Card, Callout, ContactLine } from '/components/ui'

let adulti = [
    {
        title: "CORSO DI INFORMATICA DI BASE",
        category: "",
        description: "Le moderne necessità di velocizzare e rendere più flessibili le comunicazioni sia professionali che private hanno indotto ad un ricorso crescente all’informatica. Il corso, strutturato in 5 moduli didattici, si propone di introdurre all’uso del computer e di presentare gli strumenti fondamentali quali l’utilizzo di internet e i principali programmi di office automation attraverso spiegazioni dettagliate e attività di esercitazione pratica. Durata: 20 ore - Costo: € ... + IVA",
        immagineUrl: "/images/corsoadulti/infocorso.jpg",
        url: ""
    },
    {
        title: "CORSO DI AUTOCAD 2D BASE",
        category: "",
        description: "AutoCAD è un software di grafica vettoriale utilizzato nella moderna progettazione architettonica, meccanica, ecc. Questo corso introduttivo ha la finalità di preparare all’attività professionale, in particolare per la figura del disegnatore tecnico specializzato in disegni tecnici bidimensionali. Durata: 24 ore - Costo: € 350 + IVA",
        immagineUrl: "https://www.canaleformazione.com/wp-content/uploads/corso-autocad-online.jpg",
        url: ""
    },
    {
        title: "CORSO DI AUTOCAD 3D",
        category: "",
        description: "Ideale proseguimento del corso 2D, introduce alla modellazione di oggetti tridimensionali. Durata: 24 ore - Costo: € ...+ IVA",
        immagineUrl: "https://www.consulcad.it/immagini/corso-autodesk-autocad-3d.jpg",
        url: ""
    },
]




export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                eyebrow="Formazione continua"
                title="Area Adulti"
                description="Investi nella tua formazione continua per rimanere sempre al passo con i tempi"
                imageUrl="/images/corsoadulti/progetto.jpg"
            />

            <Intro title="Perché non si smette mai di imparare!">
                <p>
                    La <strong>formazione</strong> e l’<strong>aggiornamento</strong> professionale assumono un’importanza rilevante nel mondo del lavoro, anche a fronte dei continui cambiamenti del mercato.
                </p>
                <p>
                    Le aziende del nostro territorio esprimono continuamente i propri fabbisogni formativi; inoltre, giovani e adulti manifestano sempre più la necessità di <strong>acquisire nuove competenze</strong> o di <strong>mantenersi aggiornati</strong>.
                </p>
                <p>In questa sezione puoi trovare le nostre proposte formative che rispondono a queste esigenze.</p>
            </Intro>

            <Products
                title=""
                description=""
                cardWidth={4}
                products={adulti}
            />

            <Section width="md">
                <div className="grid md:grid-cols-2 gap-5 items-start">
                    <Callout tone="info" className="m-0">
                        I corsi vengono attivati al raggiungimento di un numero minimo di richieste.
                        Se siete interessati vi preghiamo di contattare il nostro responsabile dei corsi per adulti.
                    </Callout>
                    <Card className="p-6 space-y-2">
                        <span className="inline-block text-xs font-bold tracking-wide uppercase text-brand bg-brand/10 px-2.5 py-1 rounded-md mb-1">
                            Responsabile dei corsi per adulti
                        </span>
                        <p className="m-0 text-lg font-bold">Francesco Cicogna</p>
                        <ContactLine icon="ph:envelope" href="mailto:f.cicogna@donboscosandona.it">f.cicogna@donboscosandona.it</ContactLine>
                        <ContactLine icon="ph:phone" href="tel:0421338969">tel. 0421 338 969</ContactLine>
                        <p className="m-0 pt-3 border-t border-line text-sm text-muted">
                            Scarica la scheda di pre-iscrizione ai corsi di formazione superiore e continua!
                        </p>
                    </Card>
                </div>
            </Section>
        </Layout>
    )
}
