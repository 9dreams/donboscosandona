export default function Paragraph(props) {
  const titleColor = props.color && props.color !== '#444' ? props.color : '#1976D2'

  return (
    <div
      className="relative my-8 rounded-2xl text-justify px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12"
      style={{
        maxWidth: props.maxWidth === 'lg' ? '1200px' : undefined,
        margin: props.maxWidth === 'lg' ? '2rem auto' : undefined,
        backgroundColor: props.backgroundColor || undefined,
        backgroundImage: props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {props.backgroundColor && (
        <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: props.backgroundColor, opacity: props.opacity }} />
      )}
      {props.blur && (
        <div className="absolute inset-0 rounded-2xl" style={{ backdropFilter: `blur(${props.blur})` }} />
      )}
      <div className="relative" style={{ color: props.color }}>
        {props.topImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={props.topImageUrl} alt="" className="w-full mb-12" />
        )}
        {props.title && (
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left" style={{ color: titleColor }}>
            {props.title}
          </h2>
        )}
        {props.subtitle && (
          <h3 className="text-2xl font-semibold mb-4 text-center sm:text-left" style={{ color: titleColor }}>
            {props.subtitle}
          </h3>
        )}
        <div
          className="mt-8"
          style={{
            columnCount: props.columnCount > 1 ? props.columnCount : undefined,
            columnGap: props.columnCount > 1 ? '3rem' : undefined,
          }}
        >
          <div>
            {props.avatarImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={props.avatarImageUrl} alt="" className="float-left -mt-4 mr-4 w-32 rounded-full" />
            )}
            {props.leftImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={props.leftImageUrl} alt="" className="float-left mr-4 mb-4 w-80 rounded" />
            )}
            {props.rightImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={props.rightImageUrl} alt="" className="float-right ml-4 mb-4 w-80 rounded" />
            )}
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

Paragraph.defaultProps = {
  columnCount: 1,
  maxWidth: 'lg',
  backgroundColor: false,
  color: '#444',
  opacity: 1,
}
