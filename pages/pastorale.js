import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Products from '/components/Products'
import Paragraph from '@/components/Paragraph'
import Image from 'next/image'
import { NewsWall } from '/components';
import { excludeTag } from '/lib/posts'

// Voci del menù per il componente LandingHero

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]






let pastorale = [
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
]




export default function Home({ data }) {
    return (
        <Layout>
            <Head />
           
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Proposta formativa 24/25"
                description="buoni cristiani e onesti cittadini!"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                 imageUrl="/images/pastorale/locandina.jpg"
               />


            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 mb-12">
                
            </div> 
              
            <div style={{ textAlign: 'center' }}> 
              <NewsWall
                title={null}
                data={data}
                limit={7}
                defaultTag='pastorale'
              />

  <h1 style={{ fontWeight: 'bold', marginTop: '0px', fontSize: '30px' }}>Proposta educativa 2024|2025</h1>
  <p style={{ fontSize: '20px', color: '#555', marginTop: '0', marginBottom: '10px' }}>
    Scuola di Volo, Scuola di Vita<br/><br/>
    ”Il motore è il cuore di un aereo, ma il pilota è la sua anima.”<br/> 
    Magg. Andrea Rossi - Solista PAN<br/><br/>
    Questa massima ci aiuta a presentare la nostra proposta formativa.<br/><br/>
    Ma che cos'è la proposta formativa?<br/> 
    La proposta formativa è il centro dell’azione educativa. È la modalità con cui ci impegniamo ad educare, formare, animare i giovani della scuola con una molteplicità di iniziative.<br/><br/>
    Buongiorno<br/> 
    Ritiri spirituali ed esperienziali<br/> 
    Attività formative su temi come: Affettività, Volontariato, Amicizia, Dipendenze, Animazione…<br/> 
    Tornei e giochi<br/> 
    Feste<br/> 
    Gite e visite tecniche<br/> 
    Incontri<br/> 
    …e molto altro<br/><br/>
    Ad ispirare la proposta di quest’anno allora, saranno proprio gli aerei!<br/> 
    Abbiamo infatti pensato di metterli sotto i riflettori e di farne metafora utile a riflettere sulla vita di tutti i giorni, naturalmente con ottica cristiana ma con un’attenzione universale.<br/><br/>
    Per formare così:<br/>
    Buoni Cristiani, Onesti Cittadini<br/> 
    e Professionisti Preparati.<br/><br/>
    E allora… Allacciate le cinture, chiudete il tavolino davanti a voi e PREPARIAMOCI al DECOLLO!
  </p>
</div>
           <br/> 
           <br/> 
           <div style={{ textAlign: 'center', fontSize: '20px' }}> 
<h3 style={{ fontWeight: 'bold', marginTop: '10px',}}>Timeline</h3>
</div>
            <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
    }}>
      <a href="/images/pastorale/timeline completa.jpg" target="_blank">
    <img 
      src="/images/pastorale/timeline.jpg" 
      alt="Immagine 1" 
      style={{
        width: '600px',
      }} 
    />
    <p className='text-center'>Clicca l'immagine per estenderla</p>
    </a>
    <div>
   </div>
   </div>

          

  


      
        
        <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontWeight: 'bold', marginTop: '0px', fontSize: '30px' }}>L'equipe</h3>
        <p style={{ fontSize: '20px', color: '#555', marginTop: '0', marginBottom: '10px' }}>
        Con piacere vi presentiamo l'équipe per la pastorale scolastica:

don Nicola Munari, Sacerdote Salesiano, Direttore dell’opera Salesiana di San Donà, assistente spirituale dell’equipe,<br/> 
Alessandro Ferro, Direttore della SFP, insegnante di informatica esperto in didattica e digitale<br/> 
Daniele Zanutto; incaricato per la pastorale della scuola, insegnante nel settore motoristico e carrozzeria.<br/> 
Martina Talon; insegnante d’inglese con esperienza in ambito educativo…<br/> 
Francesco Dal Molin; insegnante di matematica e fisica, scout ed esperto in tecniche di animazione<br/> 
Francesca Cadamuro, educatrice e tutor d’aula, con esperienza in ambito educativo e pastorale.<br/> 

Un gruppo di insegnanti che con entusiasmo e passione si dedicano alla cura e all'accompagnamento dei nostri studenti, attraverso proposte educative e di crescita nella fede.
</p>
        </div>
        
<div style={styles.container}>
      <img 
        src="/images/pastorale/Partner.png" 
        alt="Immagine centrata" 
        style={styles.image} 
      />
    </div>
        </Layout>
    )

}
export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=pastorale'
  )
  const data = excludeTag(await res.json(), 'screen')

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    margin: 0,
  },
  image: {
    maxWidth: '170%',
    height: 'auto',
  },
}