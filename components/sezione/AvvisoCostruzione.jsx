// Fascia «Pagina in costruzione» per le pagine con contenuti di prova.
export default function AvvisoCostruzione({ children }) {
  return (
    <div
      role="status"
      className="bg-[#F0C06B] px-6 py-3 text-center text-[15px] font-bold tracking-[0.02em] text-[#1A1708]"
    >
      {children || 'Pagina in costruzione — i contenuti qui sotto sono di prova'}
    </div>
  )
}
