export default function Sponsor({ title, description, cardWidth, cardWidthXs, logos }) {
  const xsCols = cardWidthXs ? Math.round(12 / cardWidthXs) : 3
  const smCols = 4
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 6

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      {title && <h3 className="text-3xl text-center mb-4">{title}</h3>}
      {description && <p className="text-center text-gray-500 dark:text-gray-300 mb-6 px-2">{description}</p>}
      <div className={`grid grid-cols-${xsCols} sm:grid-cols-${smCols} md:grid-cols-${mdCols} gap-2`}>
        {logos.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={logo} alt="" className="block mx-auto px-2 sm:px-4 md:px-8 py-2 object-contain w-full" />
        ))}
      </div>
    </div>
  )
}

Sponsor.defaultProps = {
  title: '',
  description: '',
  cardWidth: 2,
  cardWidthXs: 4,
}
