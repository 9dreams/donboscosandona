import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

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
                title=""
                subtitle="Anche quest’anno la PRE-ISCRIZIONE è direttamente da casa, tramite internet!"
            >
                <b>La pre-iscrizione è obbligatoria</b>: se non hai l’accesso a internet da casa, potrai usare le postazioni computer della sala giochi dell’Oratorio, non è difficile trovare qualche giovane animatore disponibile a dare una mano!
                <br/>
                <b>I ragazzi che frequentano i cammini di gruppo e/o le attività organizzate in Oratorio durante tutto l’arco dell’anno</b>  riceveranno un <b>codice personalizzato</b> che permetterà di pre-iscriversi on-line <b>da lunedì 8 maggio</b>, con priorità di scelta sulle attività/laboratori.
                <br/>
                <b>ATTENZIONE!</b> Il codice è personale ed è abbinato alla propria scheda anagrafica: <b>non va in alcun modo ceduto</b> a terzi perchè questo sfaserebbe le informazioni in essa contenute!
                <br/>
            </Paragraph>


        </Layout>
    )
}
