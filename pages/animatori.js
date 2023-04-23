import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Spazio animatori"

        imageUrl="/images/animatori/animatori.png"


      />
      <Paragraph
        title="Spazio animatori"
      >
Circa 200 ragazzi, dalla prima alla quarta superiore, che dopo le fatiche di un intenso anno scolastico, non scappano in spiaggia per rilassarsi, ma mettono il meglio delle loro energie a servizio dei più piccoli… ma chi ve lo fa fare?!?!?!?<br/>
    A loro l’Oratorio regala:<br/>
-Lunedì 12 / Martedì 13 / Mercoledì 14 giugno, dalle 9 alle 12: tre incontri di formazione per acquisire uno stile e approfondire le motivazioni.<br/>
-Mercoledì 21 e 28 giugno, 5 luglio, 12 Luglio dalle 15 alle 18: Pit-Stop Animatori. L’Oratorio rimane a porte chiuse e gli animatori fanno il punto della situazione, cercando sempre il meglio per i ragazzi! In particolare:<br/>
- Mercoledì 28 giugno: incontro-testimonianza con il campione del volley Jack.<br/>            	
- Mercoledì 5 luglio: testimonianza-concerto dei “Mienmiuaif” il duo con l’anello.<br/>
-Sabato 8 Luglio, pellegrinaggio per tutti al Santuario di Motta di Livenza, ore 11.30 la Santa Messa di ringraziamento... e alla fine ANGURIA PER TUTTI!!!<br/>
-Sabato 15 Luglio: dopo la risistemazione dell’Oratorio, una giornata di relax a Noale… con grigliatona al tramonto!<br/>
-Molte le serate di danza e sfide sportive nel dopo cena...<br/>

e se il cammino continuasse anche nel periodo invernale?!?!?! Scopri tutte le proposte sul nostro sito www.inoratorio.it<br/>
      </Paragraph>
    </Layout>
  )
}
