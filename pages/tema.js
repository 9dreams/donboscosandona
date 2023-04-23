import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.0}
        title="Be-Real"
        description="From lie to Life"
        imageUrl="images/tema/persone.png"
      />
      <Paragraph title="C'era una volta...">
        <p>
          <i>
            «Un re!» diranno subito i miei piccoli lettori. No, ragazzi, avete
            sbagliato. C’era una volta un pezzo di legno.
          </i>
        </p>
        <p>
          «Mastro ciliegia è un uomo senza grilli sotto la parrucca. Attende al
          suo lavoro e non si lascia incantare da divagazioni che tentino di
          spingere il suo interesse oltre ciò che vede e che tocca. Non si
          domanda neppure da parte arrivi quel pezzo di legno che, a suo dire, è
          capitato a tempo. Per lui un pezzo di legno è solo un pezzo di legno,
          in tutto uguale a quelli che d’inverno si mettono nelle stufe e nei
          caminetti per accendere il fuoco e riscaldare le stanze. Sicché non
          gli potrà toccare sorte diversa. Che se diventerà invece una gamba da
          tavolino, questa - agli occhi di un uomo positivo come mastro Ciliegia
          - è indubbiamente per quel legno una fortuna insperata. Un progetto
          come questo è il massimo della fantasia e dell’ardimento che è
          consentito al nostro tranquillo e ragionevole falegname…ma se invece
          dentro a quel pezzo di legno vi fosse nascosto dentro qualcuno?»
          (Card. Giacomo Biffi)
        </p>
        <p>
          La Proposta Estate 2023 vuole farci entusiasmare ed ispirare dalle
          avventure di Pinocchio per riscoprire la bellezza di una vita vera da
          portare alla luce!
        </p>
      </Paragraph>
    </Layout>
  );
}
