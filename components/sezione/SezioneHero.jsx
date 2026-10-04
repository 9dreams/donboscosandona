import Image from 'next/image'

// Hero scuro delle pagine di sezione (storia, gruppi): foto a tutta
// larghezza, occhiello, titolo in Cormorant Garamond con seconda riga in
// corsivo colorato, testo o citazione e ancore alle sezioni della pagina.
export default function SezioneHero({
  immagine,
  alt = '',
  bianconero = false,
  occhiello,
  titolo,
  titoloAccento,
  testo,
  citazione,
  ancore = [],
  accento = '#F0C06B',
  sfondo = '#0E1220',
  children,
}) {
  return (
    <section
      className="relative flex min-h-[640px] items-end overflow-hidden md:min-h-[760px]"
      style={{ backgroundColor: sfondo }}
    >
      {immagine && (
        <Image
          src={immagine}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover opacity-55 ${bianconero ? 'grayscale contrast-105' : ''}`}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${sfondo}59 0%, ${sfondo}26 35%, ${sfondo}eb 100%)`,
        }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 pt-40 md:pb-[72px]">
        {occhiello && (
          <p
            className="mb-4 text-[13px] font-bold uppercase tracking-[0.22em]"
            style={{ color: accento }}
          >
            {occhiello}
          </p>
        )}
        <h1 className="font-serif-display m-0 text-[clamp(56px,9vw,120px)] font-semibold leading-[0.95] tracking-[-0.01em] text-white">
          {titolo}
          {titoloAccento && (
            <>
              <br />
              <em className="font-serif-display font-medium" style={{ color: accento }}>
                {titoloAccento}
              </em>
            </>
          )}
        </h1>
        {testo && (
          <p className="mt-7 max-w-[600px] text-lg leading-relaxed text-white/85 md:text-xl">{testo}</p>
        )}
        {citazione && (
          <blockquote className="font-serif-display mt-7 max-w-[640px] text-2xl italic leading-snug text-white/90">
            «{citazione.testo}»
            {citazione.autore && (
              <span
                className="mt-2 block text-sm not-italic uppercase tracking-[0.12em]"
                style={{ color: accento }}
              >
                {citazione.autore}
              </span>
            )}
          </blockquote>
        )}
        {ancore.length > 0 && (
          <nav aria-label="Sezioni della pagina" className="mt-10 flex flex-wrap gap-2.5">
            {ancore.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className={
                  a.evidenza
                    ? 'rounded-full px-[18px] py-3 text-[15px] font-bold !text-[#0E1220] hover:opacity-90'
                    : 'rounded-full border border-white/30 px-[18px] py-3 text-[15px] font-semibold !text-white hover:bg-white/10'
                }
                style={a.evidenza ? { backgroundColor: accento } : undefined}
              >
                {a.label}
              </a>
            ))}
          </nav>
        )}
        {children}
      </div>
    </section>
  )
}
