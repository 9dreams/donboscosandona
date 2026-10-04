// Testo lungo già convertito in HTML (markdown dei contenuti importati).
// Gli stili tipografici sono nella classe .prosa di styles/globals.css.
export default function Prosa({ html, accento = '#5E1A63', className = '' }) {
  return (
    <div
      className={`prosa ${className}`}
      style={{ '--accento': accento }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
