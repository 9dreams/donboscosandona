import { FooterSocialIcon } from '/components/FooterSocialIcons'

export default function Footer(props) {
  return (
    <div style={{ backgroundColor: props.color || '#272727' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h1 className="text-white text-2xl mb-8">{props.title1}</h1>
            <p className="text-gray-400 text-sm leading-6">{props.description1}</p>
          </div>

          <div>
            <h1 className="text-white text-2xl mb-8">{props.title2}</h1>
            <div>
              {props.socials && props.socials.map((social) => (
                <div key={social.url || social.title} className="py-2 px-0">
                  <a
                    href={social.url}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2"
                  >
                    <FooterSocialIcon social={social} />
                    {social.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-white text-2xl mb-8">{props.title3}</h1>
            <div className="grid grid-cols-3 gap-4 min-h-[160px]">
              {props.images && props.images.map((image, i) => (
                <div key={i} className="flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image.imageUrl} alt="" width="120" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <hr className="border-white/20" />
          </div>

          <div className="lg:col-span-2 flex justify-end">
            <nav className="flex flex-wrap gap-2">
              {props.menu && props.menu.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className="px-3 py-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-7 mb-4">
            <span className="text-white text-sm">{props.copyright}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
