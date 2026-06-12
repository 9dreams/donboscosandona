export default function Certifications({ certifications, cardWidth }) {
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 3

  return (
    <div className="w-full bg-neutral-300 dark:bg-[#0d0f14] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${mdCols} bg-neutral-300 dark:bg-[#0d0f14] transition-colors duration-300`}>
          {certifications.map((certification, i) => (
            <div key={i} className="h-[295px] flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={certification.logoUrl}
                alt=""
                style={{ width: '75%', padding: '15px', borderRadius: '40px', height: '170px', paddingLeft: '90px' }}
              />
              <p className="text-center w-[250px] pl-5 text-gray-500 dark:text-gray-300 text-sm">
                {certification.text1}
                {certification.text2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Certifications.defaultProps = {
  cardWidth: 4,
}
