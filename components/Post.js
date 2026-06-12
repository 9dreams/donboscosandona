import Date from '/components/Date'

export default function Post({ post }) {
  return (
    <div className="w-full md:w-1/2 px-2 mb-4">
      <a href={'/articoli/' + post.id} className="block hover:no-underline">
        <div className="flex bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex-1 p-4">
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Date dateString={post.date} />
            </p>
            <p className="text-sm mb-3">{post.abstract}</p>
            <span className="text-sm text-[#1976D2] dark:text-[#64B5F6] font-medium">Continua a leggere...</span>
          </div>
          {post.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.imageUrl} alt={post.title} className="hidden sm:block w-48 object-cover" />
          )}
        </div>
      </a>
    </div>
  )
}
