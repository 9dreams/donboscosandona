import Head from 'next/head'
import Image from 'next/image'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import { Intro, Section, SectionTitle, Lead, FeatureCard, IconList, Card, Button } from '/components/ui'

export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                eyebrow="Collaborazione, Innovazione e Tecnologia"
                title="Didattica Attiva: Imparare è un'Esperienza!"
                description="Stanco delle solite lezioni noiose? Scopri un nuovo modo di imparare!"
                imageUrl="/images/didattica/principale.jpg"
            />

            <Intro title="Didattica Attiva: Protagonisti del Tuo Apprendimento">
                <p>
                    Dimentica i vecchi banchi polverosi e le lezioni frontali interminabili! Alla Scuola della Formazione Professionale &quot;don Bosco&quot;, la parola d&apos;ordine è partecipazione.
                </p>
                <p>
                    <strong>Cos&apos;è la didattica attiva?</strong>{' '}
                    È un modo di imparare che ti mette al centro. Tu diventi il protagonista del tuo percorso, non un semplice spettatore! Con la didattica attiva, impari facendo, partecipando attivamente alle lezioni e confrontandoti con i tuoi compagni.
                </p>
            </Intro>

            <Section id="vantaggi" width="lg">
                <SectionTitle icon="ph:users-three">Quali sono i vantaggi?</SectionTitle>
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 items-start">
                    <div className="relative aspect-[5/3] lg:aspect-auto lg:h-full min-h-60 overflow-hidden rounded-2xl">
                        <Image src="/images/didattica/collab.jpeg" alt="Lavoro di gruppo in classe" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        <FeatureCard icon="ph:handshake" title="Collaborazione e condivisione:">
                            Dimentica la competizione sfrenata! Con il lavoro di gruppo e il cooperative learning impari a collaborare con gli altri, a condividere idee e a raggiungere obiettivi comuni. Insieme si vince!
                        </FeatureCard>
                        <FeatureCard icon="ph:chalkboard-teacher" title="Imparare dagli altri:">
                            Con il peer tutoring puoi diventare tutor dei tuoi compagni e scoprire che insegnare è il modo migliore per imparare davvero.
                        </FeatureCard>
                        <FeatureCard icon="ph:arrows-clockwise" title="Lezioni dinamiche e coinvolgenti:">
                            Con la Flipped Classroom le lezioni diventano un momento di confronto e di attività pratica. Prima studi a casa con le videolezioni, poi in classe ti dedichi a esercitazioni, dibattiti e lavori di gruppo.
                        </FeatureCard>
                        <FeatureCard icon="ph:mask-happy" title="Mettiti in gioco!">
                            Con il role playing puoi sperimentare nuove situazioni, immedesimarti in ruoli diversi e sviluppare la tua empatia.
                        </FeatureCard>
                    </div>
                </div>
            </Section>

            <Section id="tecnologia" width="lg">
                <SectionTitle icon="ph:device-tablet">Tecnologia al servizio dell&apos;apprendimento:</SectionTitle>
                <Lead>
                    Per rendere l&apos;apprendimento ancora più coinvolgente e stimolante, utilizziamo l&apos;iPad Apple:
                </Lead>
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
                        <FeatureCard icon="ph:paint-brush" title="Creatività senza limiti:">
                            Disegna, registra video, crea presentazioni... libera la tua fantasia!
                        </FeatureCard>
                        <FeatureCard icon="ph:user-focus" title="Apprendimento personalizzato:">
                            L&apos;iPad si adatta al tuo stile di apprendimento e ti aiuta a superare le difficoltà.
                        </FeatureCard>
                        <FeatureCard icon="ph:wheelchair" title="Accessibilità per tutti:">
                            Grazie alle sue funzioni inclusive, l&apos;iPad supporta gli studenti con disturbi specifici dell&apos;apprendimento (DSA).
                        </FeatureCard>
                    </div>
                    <div className="relative aspect-[5/3] lg:aspect-auto lg:h-full min-h-60 overflow-hidden rounded-2xl">
                        <Image src="/images/didattica/ipad.jpeg" alt="Studenti con l'iPad" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                    </div>
                </div>
            </Section>

            <Section id="gemini" width="lg">
                <Card highlight className="overflow-hidden p-0">
                    <div className="grid md:grid-cols-2">
                        <div className="relative min-h-60">
                            <Image src="/images/didattica/gemini.webp" alt="Gemini, l'intelligenza artificiale di Google" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="p-6 md:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ochre text-ink">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" /></svg>
                                </span>
                                <h2 className="text-2xl font-bold text-brand m-0 leading-tight">
                                    La rivoluzione di GEMINI, l&apos;intelligenza artificiale di Google:
                                </h2>
                            </div>
                            <p className="mb-5">Grazie all&apos;accordo con Google, potrai:</p>
                            <IconList
                                items={[
                                    { icon: 'ph:chat-circle-dots', children: 'Interagire con un tutor virtuale che risponde alle tue domande e ti aiuta a comprendere i concetti più difficili.' },
                                    { icon: 'ph:check-square-offset', children: 'Ricevere feedback personalizzati sul tuo lavoro e migliorare le tue competenze.' },
                                    { icon: 'ph:magnifying-glass', children: 'Accedere a un mondo di informazioni e approfondire i tuoi interessi.' },
                                ]}
                            />
                        </div>
                    </div>
                </Card>
            </Section>

            <Section width="sm" className="text-center">
                <p className="font-serif text-2xl leading-relaxed mb-3">
                    Insomma, qui alla Scuola della Formazione Professionale &quot;don Bosco&quot; la noia non sa dove andare a parare!
                </p>
                <p className="text-xl font-bold text-brand mb-8">
                    Cosa aspetti? Vieni a scoprire un nuovo modo di imparare!
                </p>
                <Button href="/contatti" variant="accent">Contatti</Button>
            </Section>
        </Layout>
    );
}
