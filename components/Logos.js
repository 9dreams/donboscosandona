export default function TheLogo({ url }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="w-full rounded-2xl" />
    </div>
  )
}
