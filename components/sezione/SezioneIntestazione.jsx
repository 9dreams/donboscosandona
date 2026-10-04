// Intestazione di un blocco: occhiello, titolo in Cormorant Garamond e
// testo introduttivo affiancato (si impila su telefono).
export default function SezioneIntestazione({
  occhiello,
  titolo,
  intro,
  accento = '#5E1A63',
  scuro = false,
  className = '',
}) {
  return (
    <div className={`mb-11 flex flex-wrap items-end gap-x-14 gap-y-6 ${className}`}>
      <div className="min-w-0 flex-[1_1_420px]">
        {occhiello && (
          <p
            className="mb-2.5 text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ '--accento': accento }} data-accento
          >
            {occhiello}
          </p>
        )}
        <h2
          className={`font-serif-display m-0 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.05] ${
            scuro ? '!text-white' : '!text-[#2A2230] dark:!text-[#F4EFE6]'
          }`}
        >
          {titolo}
        </h2>
      </div>
      {intro && (
        <p
          className={`m-0 min-w-0 flex-[1_1_380px] text-[17px] leading-relaxed ${
            scuro ? 'text-white/80' : 'text-[#5A5060] dark:text-[#B9AFC0]'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
