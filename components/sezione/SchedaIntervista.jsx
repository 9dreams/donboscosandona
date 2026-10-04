import Image from 'next/image'
import { Icon } from '@iconify/react'

// Scheda di un'intervista «A tu per tu»: foto, didascalia, nome, presentazione.
export default function SchedaIntervista({ intervista, accento = '#5E1A63' }) {
  const { slug, nome, copertina, didascaliaCopertina, presentazione, href } = intervista
  return (
    <article className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_1px_2px_rgba(42,34,48,0.06)] dark:bg-[#1C1822]">
      <div className="relative h-[190px]">
        {copertina && (
          <Image
            src={copertina}
            alt={didascaliaCopertina || nome}
            fill
            sizes="(min-width: 1024px) 300px, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-[22px] pb-[22px] pt-5">
        {didascaliaCopertina && (
          <p className="m-0 text-[13px] italic text-[#6E6372] dark:text-[#A79DAD]">{didascaliaCopertina}</p>
        )}
        <h3 className="font-serif-display m-0 text-[26px] font-bold leading-[1.1] !text-[#2A2230] dark:!text-[#F4EFE6]">
          {nome}
        </h3>
        <p className="m-0 flex-1 text-[15px] leading-[1.55] text-[#4A4050] dark:text-[#C9C0CE]">{presentazione}</p>
        <a
          href={href || `/storia/interviste/${slug}`}
          className="mt-1.5 inline-flex min-h-11 items-center gap-2 text-[15px] font-bold"
          style={{ color: accento }}
        >
          Leggi l'intervista <Icon icon="ph:arrow-right" />
        </a>
      </div>
    </article>
  )
}
