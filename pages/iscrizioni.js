import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Link from 'next/link'

export default function Pagina() {
    return (
        <Layout>
            <LandingHero
                opacity={0.2}
                title="Iscrizioni"
                description="Iscriviti e non inventare bugie per non venire, ti aspettiamo!"
                imageUrl="https://fumettologica.it/wp-content/uploads/2022/07/trailer-pinocchio-netflix-del-toro.jpg"
            />
            <Paragraph
                subtitle="Anche quest’anno la PRE-ISCRIZIONE è direttamente da casa, tramite internet!"
            >
                <b>La pre-iscrizione è obbligatoria</b>: se non hai l’accesso a internet da casa, potrai usare le postazioni computer della sala giochi dell’Oratorio, non è difficile trovare qualche giovane animatore disponibile a dare una mano!
                <br />
                <b>I ragazzi che frequentano i cammini di gruppo e/o le attività organizzate in Oratorio durante tutto l’arco dell’anno</b>  riceveranno un <b>codice personalizzato</b> che permetterà di pre-iscriversi on-line <b>da lunedì 8 maggio</b>, con priorità di scelta sulle attività/laboratori.
                <br /><br />
                <b>ATTENZIONE!</b> Il codice è personale ed è abbinato alla propria scheda anagrafica: <b>non va in alcun modo ceduto</b> a terzi perchè questo sfaserebbe le informazioni in essa contenute!
                <br />
            </Paragraph>

            <Paragraph
                subtitle="Ecco i passaggi per l'iscrizione"
                backgroundColor="#ffe9c2"
            >
                1. <b>Collegati al sito</b> <a href="http://www.inoratorio.it/per">http://www.inoratorio.it/per</a> e segui le istruzioni.<br />
                2. Inserendo il <b>codice</b> ricevuto, ti verrà presentata la scheda con i tuoi <b>dati</b>: controlla se sono corretti, in caso aggiornali.<br />
                3. Scegli le settimane di <b>presenza</b> e le <b>attività/laboratori</b> che vuoi frequentare.<br />
                4. Specifica in che <b>data (tra il 22 e il 26 Maggio)</b> e fascia oraria verrai a <b>confermare l’iscrizione</b>.<br />
                5. Alla fine del procedimento on-line, ti verrà rilasciato un <b>codice numerico</b> che servirà per confermare l’iscrizione in oratorio: non perderlo!<br /><br />

                <b>La pre-iscrizione sarà aperta a TUTTI a partire da lunedì 16 maggio</b>... non servirà alcun codice!<br /><br />

                1. <b>Collegati</b> al sito <a href="http://www.inoratorio.it/per">http://www.inoratorio.it/per</a>  e segui le istruzioni.<br />
                2. Compila la <b>scheda anagrafica</b> con i tuoi dati.<br />
                3. Scegli le settimane di <b>presenza</b> e le <b>attività/laboratori</b> che vuoi frequentare.<br />
                4. Dovrai specificare in che <b>data (tra il 22 e il 26 Maggio)</b> e fascia oraria verrai a confermare l’iscrizione.<br />
                5. Alla fine del procedimento on-line, ti verrà rilasciato un <b>codice numerico</b> che servirà per confermare l’iscrizione in oratorio: non perderlo!<br />
            </Paragraph>

            <Paragraph
                backgroundColor="#ffe100"
                leftImageUrl="/images/iscrizioni/warning.png"
            >
                ATTENZIONE: Al momento dell’effettiva iscrizione in Oratorio <b>(tra il 22 e il 26 Maggio)</b> sono necessari:<br />
                -<b> i ragazzi/e che frequenteranno la PER23</b>: sarà scattata la foto e sarà consegnata la maglietta;<br />
                -<b> un genitore</b> (o chi ne fa le veci): per la firma della liberatoria sulla privacy e il pagamento della quota di partecipazione.
            </Paragraph>

            <Paragraph
                subtitle="Quota di iscrizione:"
                backgroundColor="#ffe9c2"
            >
                1 ragazzo: 120,00 €<br />
                2 fratelli: 215,00€<br />
                3 fratelli: 300,00€<br />
            </Paragraph>

            <Paragraph>
                Il non presentarsi nel giorno e ora specificati, comporta la perdita della priorità acquisita nella scelta delle attività/laboratori,<br/> rimarrà tuttavia valida la preiscrizione!<br/>
                Se al momento della pre-iscrizione on-line non compaiono alcune attività/laboratori, significa che questi sono già pieni.<br/> NON C’E’ alcuna possibilità di aggiungere posti extra!<br/><br/>

                I dati e le attività/laboratori scelti possono essere modificati fino al momento dell’iscrizione utilizzando l’email ricevuta al momento della pre-iscrizione.
            </Paragraph>
        </Layout>
    )
}
