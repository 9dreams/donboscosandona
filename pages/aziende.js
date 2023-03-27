import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2'


export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="I nostri allievi in stage"
                description="Leggi qua per scoprire di più su gli stage"
                imageUrl="/images/aziende/img.sfondoA.jpg"
            />
            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>

                <font face="Verdana">
                <h2>Settori</h2>
                    <p>
                        I nostri allievi si stanno formando nell'ambito dei settori:
                        <br /> elettrico
                        <br /> energie
                        <br /> informatico
                        <br /> meccanico
                        <br /> motoristico
                        <br /> carrozzeria
                    </p>



                    <h2> Stage formativi </h2>
                    <p>
                        Della durata di tre settimane, nel periodo di maggio/giugno (in seconda) o quattro settimane, nel periodo di febbraio/marzo (in terza): l'allievo è presente in azienda per 8 ore al giorno.
                    </p>

                    <h2>Corsi per apprendisti</h2>
                    <p>
                        Il CNOS FAP CFP Don Bosco, a partire dal 2000, eroga l’attività di corsi per apprendisti. Tali corsi rispondono all’esigenza di formazione dei giovani lavoratori secondo le modalità previste dalle norme in materia.
                    </p>

                    <h2>Il Sistema Duale</h2>
                    <p>
                        <br />
                        <br /> E’ un modello di formazione professionale alternata fra scuola e lavoro che vede le istituzioni formative e i datori di lavoro fianco a fianco nel processo formativo.
                        <br /> La formazione si attua in collaborazione con l’azienda: le materie teoriche si svolgono presso il CFP mentre la formazione professionalizzante si tiene nei laboratori ed officine aziendali. La formazione aziendale avviene secondo due modalità: l’alternanza scuola - lavoro e il contratto di apprendistato.
                        <br /> La partecipazione al sistema duale di formazione professionale comporta una serie di diritti e doveri: il diritto alla coerenza tra le attività svolte in azienda e il titolo da conseguire; il diritto alla formazione in materia di salute e sicurezza sui luoghi di lavoro, il diritto alla valutazione e certificazione delle competenze. Per essere ammesso all’esame conclusivo l’allievo deve frequentare il 75% del percorso previsto dal Piano Formativo Individuale e raggiungere gli obiettivi formativi per la prosecuzione del contratto. Il mancato conseguimento di tali obiettivi costituisce un giustificato motivo di licenziamento.
                        <br /> Alla fine del percorso l’allievo dovrà sostenere un esame il cui superamento porterà al conseguimento di un diploma di qualifica, titolo che permetterà di esplorare nuove opportunità: l’inserimento in azienda come apprendista; la prosecuzione degli studi per giungere all’esame di maturità; la frequenza ad un percorso di ITS.
                    </p>


                    <h2>Alternanza scuola lavoro</h2>
                    <p>
                        <br />Nella forma dell’alternanza l’allievo rimane in carico della struttura formativa e si reca in azienda per le ore previste dall’accordo che viene stipulato tra azienda e CFP.
                        <br />L'alternanza si realizza svolgendo attività all'interno e all'esterno della scuola, in un percorso ideale che parte dalla didattica laboratoriale e giunge al rapporto di collaborazione fra scuole, studenti ed imprese ospitanti. Il percorso è monitorato dai soggetti coinvolti, che affidano al tutor scolastico e aziendale un ruolo di particolare rilievo.
                    </p>

                    <br />

                    <h2>Il contratto di apprendistato</h2>
                    <p>
                        <br /> Con il contratto di apprendistato, l’alunno apprendista è dipendente dell’azienda; frequenta le ore di formazione presso il CFP, ore per le quali non viene retribuito. Il tempo passato in azienda viene ripartito in ore concordate per la formazione e ore di ordinario lavoro. Il monte ore totale previsto dal sistema duale è di 490 ore di formazione presso il CFP e 500 in azienda.
                        <br /> L'apprendistato è un contratto di lavoro a tempo determinato finalizzato alla formazione e all'occupazione giovanile.
                        <br /> Il Decreto Legislativo n. 81/2015, operando una revisione profonda della disciplina normativa del Jobs Act, ha reso questo modello contrattuale particolarmente vantaggioso per il datore di lavoro, che può beneficiare di alcune agevolazioni retributive e contributive.
                    </p>

                    <br />

                    <h2>Accesso</h2>

                    <p>
                        <br />L’azienda deve avere almeno un dipendente, altrimenti le incombenze diventano troppo onerose per la realizzazione del DVR (documento di valutazione dei rischi).
                        <br />
                        <br />Va stesa una convenzione fra Azienda e CFP
                    </p>

                    <br />

                    <h2>Durata</h2>
                    <p>
                        La durata minima del contratto di Apprendistato è di 6 mesi, quella massima è:
                        <br />
                        <br />1 Anno per il conseguimento del Diploma per coloro che hanno già una qualifica
                        <br />Al termine del percorso formativo e successivamente all’acquisizione del Diploma Professionale può essere attivato l’apprendistato professionalizzante.
                    </p>

                    <h2>Benefici economici</h2>
                    <br />
                    <p>
                        Possibilità di inquadrare l’apprendista fino a due livelli inferiori rispetto alla categoria spettante al lavoratore con qualifica corrispondente a quella al cui conseguimento è finalizzato il contratto ovvero, in alternativa, di stabilire la retribuzione dell'apprendista in misura percentuale e in modo graduale alla anzianità di servizio.
                        <br />
                        <br />Retribuzione stabilita in percentuale rispetto a quella dei lavoratori addetti a mansioni che richiedono la qualifica a cui è finalizzato il contratto:
                        <br />
                        <br />45% il primo anno
                        <br />55% il secondo anno
                        <br />65% il terzo anno
                        <br />70% il quarto anno
                        <br />
                        <br />Per le ore di formazione presso il C.F.P. Don Bosco il datore di lavoro è esonerato da ogni obbligo retributivo (15 ore settimanali – 590 nei 10 mesi).
                        <br />
                        <br />Per le ore di formazione a carico del datore di lavoro viene riconosciuta all’apprendista una retribuzione pari al 10% di quella che gli sarebbe dovuta (16 ore settimanali – 400 nei 10 mesi).
                    </p>

                    <h2>Benefici contributivi</h2>
                    <br />
                    <p>

                        Per tutta la durata dell’apprendistato, contribuzione a carico del datore di lavoro ridotta:
                        <br />
                        <br />Per aziende con meno di 10 dipendenti: 1,5%
                        <br />Per aziende con almeno 10 dipendenti: 5%
                        <br />
                        <br />Al termine del contratto di apprendistato per il Diploma, per l’anno successivo, alla conferma in servizio dell’apprendista, il datore di lavoro potrà beneficiare della seguente aliquota retributiva:
                        <br />
                        <br />Per aziende con meno di 10 dipendenti = 1,61%
                        <br />Per aziende con almeno 10 dipendenti = 11,61%
                    </p>
                    <br />

                    <h2>Benefici fiscali</h2>
                    <p>
                        Esclusione delle spese sostenute per la formazione nel calcolo dell’IRAP.
                    </p>
                    <br />

                    <h2>Per informazioni</h2>
                    <p>
                        Scrivi a Francesco Cicogna: f.cicogna@donboscosandona.it o telefona allo 0421 338 980.
                    </p>
                </font>
            </Container>
        </Layout>
    )
}
