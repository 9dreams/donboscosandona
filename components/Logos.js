export default function TheLogo({ url }) {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="w-full" />
    </div>
  )
}
