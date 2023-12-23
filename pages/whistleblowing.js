import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from '/components/Paragraph'
import News from '/components/News'

export default function Page() {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.4}
        title='Whistleblowing - Segnalazione illeciti'
        description='Piattaforma on line per le segnalazioni di illeciti o irregolarità (ai sensi dell’art. 54-bis del d.lgs. n. 165/2001)'
        buttonUrl='https://whistleblowing.fp.salesianinordest.it/'
        buttonText='Accedi alla piattaforma'
        imageUrl='/images/trasparenza/whistleblowing.jpg'
      />
      <Paragraph>
        La SFP DON BOSCO mette a disposizione un sistema informatico per la
        segnalazione di condotte illecite di interesse generale e non di
        interesse individuale, di cui si sia venuti a conoscenza in ragione del
        rapporto di lavoro, secondo la normativa che regola il cosiddetto
        whistleblowing. <br />
        ll whistleblower (segnalante) può essere sia un dipendente della SFP DON
        BOSCO, sia un lavoratore o un collaboratore delle imprese fornitrici di
        beni o servizi o che realizzano opere in favore della SFP DON BOSCO.
        <br />
        <a href='https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--151079f00f3db65798bdc4241f8e3affe236ed31/Informativa%20Privacy%20piattaforma%20Whistleblowing.pdf'>Prendi visione dell’informativa sul trattamento dei dati</a>
      </Paragraph>

      <Paragraph title='Come segnalare illeciti o irregolarità'>
        Il modulo di segnalazione disponibile sulla piattaforma prevede
        l’indicazione della tipologia di condotta illecita, di una serie di dati
        relativi al tempo e al luogo dei fatti, ai soggetti coinvolti, al
        livello di coinvolgimento e di conoscenza diretta o meno dei fatti da
        parte del segnalante, all’eventuale coinvolgimento di altri soggetti
        informati. Per garantire riservatezza e anonimato, tutti i dati inseriti
        dal segnalante sono criptati, compreso l’indirizzo e-mail.
        <br />
        <a href='https://whistleblowing.fp.salesianinordest.it/'>
          Accedi alla piattaforma
        </a>
      </Paragraph>

      <Paragraph title='Modalità alternative di segnalazione'>
        La piattaforma whistleblowing costituisce il canale preferenziale per la
        segnalazione di illeciti, consentendo a chi segnala di richiedere
        aggiornamenti sulla segnalazione effettuata. Tuttavia, ai sensi
        dell’art. 54-bis del d.lgs. n. 165/2001 (whistleblowing)", è possibile
        effettuare una segnalazione vocale mediante il canale telefonico diretto
        con il gestore delle segnalazioni (avv. Lorenzo Pilon) al numero
        049-650777 dalle ore 9 alle ore 13, dal lunedì al venerdì anche per
        appuntamento. Si ricorda che questa modalità di segnalazione garantisce
        la riservatezza del segnalante ma non l’anonimato.
      </Paragraph>

      <Paragraph title='Piattaforma informatica dedicata'>
        Il sistema utilizza la tecnologia opensource Globaleaks che è ritenuta
        dagli esperti fra le più efficaci a livello mondiale in termini di
        sicurezza e garantisce, tramite il ricorso a strumenti di crittografia,
        viene garantita la riservatezza dell'identità della persona segnalante,
        della persona coinvolta, della persona menzionata nella segnalazione,
        nonché del contenuto della segnalazione e della eventuale documentazione
        inoltrata.
        <h3>Comunichiamo attraverso il "key code"</h3>
        Registrando la segnalazione sul portale si otterrà un codice
        identificativo univoco di 16 cifre (key code).
        <br />
        Tale codice:
        <ul>
          <li>
            deve essere utilizzato per dialogare con il Responsabile per la
            Prevenzione della Corruzione aziendale in modo spersonalizzato
            attraverso il Canale (la piattaforma informatica) e per essere
            costantemente informati sullo stato di lavorazione della
            segnalazione inviata.
          </li>
          <li>
            deve essere conservato con cura in quanto, in caso di smarrimento,
            non potrà essere recuperato o duplicato in alcun modo.
          </li>
        </ul>
      </Paragraph>
    </Layout>
  )
}
