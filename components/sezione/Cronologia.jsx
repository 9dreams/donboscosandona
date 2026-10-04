import Image from 'next/image'

// Cronologia a righe: anno grande a sinistra, testo al centro, foto
// facoltativa a destra. Su telefono le tre colonne si impilano.
export default function Cronologia({ tappe = [], accento = '#5E1A63' }) {
  return (
    <div>
      {tappe.map((t) => (
        <div
          key={`${t.anno}-${t.titolo}`}
          className="flex flex-wrap gap-x-10 border-t border-[#DCCFBE] py-7 dark:border-white/10"
        >
          <div className="flex-[0_0_180px]">
            <p
              className="font-serif-display m-0 text-[44px] font-bold leading-none"
              style={{ '--accento': accento }} data-accento
            >
              {t.anno}
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_420px]">
            <h3 className="font-ui mb-2 mt-1 text-xl font-bold !text-[#2A2230] dark:!text-[#F4EFE6]">
              {t.titolo}
            </h3>
            {(t.paragrafi || []).map((p, i) => (
              <p
                key={i}
                className="mb-3 text-[17px] leading-[1.65] text-[#4A4050] last:mb-0 dark:text-[#C9C0CE]"
              >
                {p}
              </p>
            ))}
          </div>
          {t.foto && (
            <figure className="m-0 mt-4 min-w-0 flex-[1_1_300px]">
              <div className="relative h-[220px] overflow-hidden rounded-[14px]">
                <Image
                  src={t.foto}
                  alt={t.didascalia || ''}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              {t.didascalia && (
                <figcaption className="mt-2 text-[13px] text-[#6E6372] dark:text-[#A79DAD]">
                  {t.didascalia}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      ))}
    </div>
  )
}
