export default function PostInEvidenza({ post }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <div
        className="relative text-white mb-8 bg-gray-800 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${post.immagine})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-xl p-6 md:p-12">
          <h1 className="text-3xl font-bold mb-4">{post.titolo}</h1>
          <p className="mb-4">{post.descrizione}</p>
          {post.testoLink && (
            <a href="#" className="text-blue-300 hover:underline">{post.testoLink}</a>
          )}
        </div>
      </div>
    </div>
  )
}
