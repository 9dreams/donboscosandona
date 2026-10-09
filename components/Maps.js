// La mappa incorporata, dentro una scheda arrotondata.
export default function Maps({ url, maxWidth, maxHeight }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-16" style={{ maxWidth: maxWidth && maxWidth !== '100%' ? maxWidth : undefined }}>
      <div className="overflow-hidden rounded-2xl border border-line shadow-sm bg-surface">
        <iframe
          src={url}
          title="Mappa: come raggiungerci"
          width="100%"
          height={maxHeight || 450}
          style={{ border: 0, display: 'block' }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
