const Testimonials = ({ testimonials, cardWidth, imageUrl }) => {
  const lgCols = cardWidth ? Math.round(12 / cardWidth) : 3

  return (
    <div
      className="px-10 py-12 flex flex-col items-center text-center bg-cover bg-center"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-${lgCols} gap-8 mt-8`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-[#181b23] mt-12 mb-20 p-8 shadow-md rounded-xl dark:shadow-black/35"
            >
              <div className="flex items-center mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-[85px] h-[85px] rounded-full object-cover absolute bottom-[-50px] left-[140px]"
                />
              </div>
              <div className="mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.ibb.co/yP6QVQk/virgolette.png" alt="" className="w-8" />
              </div>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{testimonial.text}</p>
              <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.social}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
