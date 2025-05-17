import { Typography } from '@mui/material';
import Image from 'next/image';
import { CalendarToday, LocalOffer } from '@mui/icons-material';

function readMore(string, maxWords) {
  if (string) {
    var strippedString = string.trim();
    var array = strippedString.split(' ');
    var wordCount = array.length;
    var string = array.splice(0, maxWords).join(' ');

    if (wordCount > maxWords) {
      string += '...';
    }
  }
  return string;
}

export default function NewsCard({ post, aspectRatio, defaultTag }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl h-full">
      {/* Immagine */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.immagine}
          alt={post.titolo}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Data e ora */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
            <CalendarToday sx={{ fontSize: 16 }} />
            <span>
              {post.pubblicazione}
            </span>
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="p-6 min-h-[17rem]">
        {/* Titolo */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-[#780202] transition-colors duration-300">
          {post.titolo}
        </h2>

        {/* Abstract */}
        <p className="text-gray-600 mb-6 line-clamp-3">
          {readMore(post.abstract, 40)}
        </p>

        {/* Link */}
        <a
          href={(post.articolo && '/articoli/' + post.id) || post.link || post.allegato}
          className="inline-flex items-center text-[#780202] font-semibold hover:text-[#b31217] transition-colors duration-300"
        >
          {post.articolo ? 'Continua a leggere' : (post.allegato ? 'Scarica l\'allegato' : 'Scopri di più')}
          <svg
            className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        {/* Tag */}
        {post.tag && post.tag !== defaultTag && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {post.tag.split(',').map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-red-50 text-[#780202] rounded-full text-xs font-medium hover:bg-red-100 transition-colors duration-300 cursor-pointer"
              >
                #{tag.trim().toLowerCase()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

NewsCard.defaultProps = {
  aspectRatio: '3 / 2',
};
