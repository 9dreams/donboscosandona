import Paragraph from '@/components/Paragraph';

import Head from 'next/head';
import Image from 'next/image';
import Layout from '/components/Layout';
import LandingHero from '/components/LandingHero.js';

import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';


let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
];

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <LandingHero
                opacity={0.6}
                siteName="CFP DON BOSCO"
                title="Didattica Attiva: Imparare è un'Esperienza!"
                description="Stanco delle solite lezioni noiose? Scopri un nuovo modo di imparare!"
                imageUrl="/images/didattica/principale.jpg"
            />
            <Paragraph
                title="Didattica Attiva: Protagonisti del Tuo Apprendimento"
                subtitle="Collaborazione, Innovazione e Tecnologia"
                imageUrl="/images/didattica/foto1.jpg"
                backgroundColor="white"
            >
                <Typography variant="body1" paragraph>
                    Dimentica i vecchi banchi polverosi e le lezioni frontali interminabili! Alla Scuola della Formazione Professionale "don Bosco", la parola d'ordine è partecipazione.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Cos'è la didattica attiva?</strong>
                    È un modo di imparare che ti mette al centro. Tu diventi il protagonista del tuo percorso, non un semplice spettatore! Con la didattica attiva, impari facendo, partecipando attivamente alle lezioni e confrontandoti con i tuoi compagni.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
                    <Image src="/images/didattica/collab.jpeg" alt="Foto aggiuntiva 2" width={500} height={200} />
                </Box>
                <Typography variant="body1" paragraph>
                    <strong>Quali sono i vantaggi?</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Collaborazione e condivisione:</strong> Dimentica la competizione sfrenata! Con il lavoro di gruppo e il cooperative learning impari a collaborare con gli altri, a condividere idee e a raggiungere obiettivi comuni. Insieme si vince!
                    <strong>Imparare dagli altri:</strong> Con il peer tutoring puoi diventare tutor dei tuoi compagni e scoprire che insegnare è il modo migliore per imparare davvero.
                    <strong>Lezioni dinamiche e coinvolgenti:</strong> Con la Flipped Classroom le lezioni diventano un momento di confronto e di attività pratica. Prima studi a casa con le videolezioni, poi in classe ti dedichi a esercitazioni, dibattiti e lavori di gruppo.
                    <strong>Mettiti in gioco!</strong> Con il role playing puoi sperimentare nuove situazioni, immedesimarti in ruoli diversi e sviluppare la tua empatia.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Tecnologia al servizio dell'apprendimento:</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    Per rendere l'apprendimento ancora più coinvolgente e stimolante, utilizziamo l'iPad Apple:
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Creatività senza limiti:</strong> Disegna, registra video, crea presentazioni... libera la tua fantasia!
                    <strong>Apprendimento personalizzato:</strong> L'iPad si adatta al tuo stile di apprendimento e ti aiuta a superare le difficoltà.
                    <strong>Accessibilità per tutti:</strong> Grazie alle sue funzioni inclusive, l'iPad supporta gli studenti con disturbi specifici dell'apprendimento (DSA).
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
                    <Image src="/images/didattica/ipad.jpeg" alt="Foto aggiuntiva 2" width={500} height={200} />
                </Box>
                <Typography variant="body1" paragraph>
                    <strong>La rivoluzione di GEMINI, l'intelligenza artificiale di Google:</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    Grazie all'accordo con Google, potrai:
                </Typography>
                <Typography variant="body1" paragraph>
                    Interagire con un tutor virtuale che risponde alle tue domande e ti aiuta a comprendere i concetti più difficili.
                    Ricevere feedback personalizzati sul tuo lavoro e migliorare le tue competenze.
                    Accedere a un mondo di informazioni e approfondire i tuoi interessi.
                </Typography>
                <Typography variant="body1" paragraph>
                    Insomma, qui alla Scuola della Formazione Professionale "don Bosco" la noia non sa dove andare a parare!
                </Typography>
                <Typography variant="body1" paragraph>
                    Cosa aspetti? Vieni a scoprire un nuovo modo di imparare!
                </Typography>

                {/* Spazio per aggiungere altre foto */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
                    <Image src="/images/didattica/gemini.webp" alt="Foto aggiuntiva 2" width={500} height={300} />
                </Box>
            </Paragraph>
        </Layout>
    );
}