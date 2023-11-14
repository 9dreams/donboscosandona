import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
  Featured,
  Logos,
  Torneo,
  Paragraph,
} from "/components";

export default function Home() {
  return (
    <Layout>
      <LandingHero
        height={100}
        opacity={0}
        imageUrl="/images/informatico/9dreams.jpg"
      />
      <Paragraph
        title="9dreams: l'agenzia di comunicazione del settore informatico"
        subtitle=""
      >
        <p style={{ fontSize: "20px" }}>
          <em>
            Con l'acquisto del dominio e la definizione del logo, è da oggi
            operativa 9dreams, la divisione creativa del settore informatico...
          </em>
        </p>
        Nel settore informatico del CFP DON BOSCO di San Donà di Piave abbiamo
        sempre portato avanti lo studio di Photoshop (il programma di
        fotoritocco per eccellenza) ma come spesso capita a scuola,<strong> quando si
        relega una cosa a dei semplici esercizi, non si innesca quella scintilla
        che fa esplodere la passione e apre nuovi orizzonti.</strong>
      </Paragraph>
    </Layout>
  );
}
