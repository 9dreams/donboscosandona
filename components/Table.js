export default function MyTable(props) {
  const titleColor = props.color === 'white' ? 'white' : '#1976D2'

  return (
    <div
      className="relative my-8 p-6 md:p-12 text-justify rounded-2xl bg-cover bg-no-repeat bg-center"
      style={{
        maxWidth: props.maxWidth === 'lg' ? '1200px' : undefined,
        margin: props.maxWidth === 'lg' ? '2rem auto' : undefined,
        backgroundImage: props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : undefined,
      }}
    >
      {props.backgroundColor && (
        <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: props.backgroundColor, opacity: props.opacity }} />
      )}
      {props.blur && (
        <div className="absolute inset-0 rounded-2xl" style={{ backdropFilter: `blur(${props.blur})` }} />
      )}
      <div className="relative" style={{ color: props.color }}>
        {props.title && (
          <h2 className="text-3xl font-bold mb-4" style={{ color: titleColor }}>{props.title}</h2>
        )}
        {props.subtitle && (
          <h1 className="text-2xl mb-4" style={{ color: props.color }}>{props.subtitle}</h1>
        )}
        <div className="overflow-x-auto">
          <table className="min-w-[650px] w-full border-collapse">
            <thead>
              <tr>
                {props.rows[0].map((titolo, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold border-b border-current/20" style={{ color: props.color }}>
                    {titolo}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, i) =>
                i > 0 && (
                  <tr key={i} className="border-b border-current/10 last:border-0">
                    {row.map((content, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: props.color }}>
                        {content}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

MyTable.defaultProps = {
  color: 'black',
}
