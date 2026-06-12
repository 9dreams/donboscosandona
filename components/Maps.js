export default function Maps({ url, maxWidth, maxHeight }) {
  return (
    <div className="flex items-center justify-center w-full" style={{ maxWidth: maxWidth || '100%' }}>
      <iframe src={url} width="100%" height={maxHeight || 450} style={{ border: 0 }} />
    </div>
  )
}
