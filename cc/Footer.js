import Image from "next/image";

export default function Footer({
  logo,
  titolo,
  indirizzo,
  contattiTitolo1,
  telefono1,
  fax1,
  email1,
  contattiTitolo2,
  telefono2,
  fax2,
  email2,
  seguiciTitolo,
  pagamentoTitolo,
  pagamentoImmagine,
  infoAzienda,
  privacyLink,
  cookiePolicy,
  sviluppatoDa,
  mediacyLink,
  iconaFacebook,
  iconaInstagram,
  iconaTwitter,
}) {
  return (
    <>
      <div className="bg-gray-200 mt-40">
        <div className="container mx-auto py-12 text-center lg:text-left">
          <div className="w-full flex justify-center mt-4 mb-10">
            <a className="cursor-pointer">
              <Image {...logo} />
            </a>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            <div className="flex flex-col gap-6">
              <div>
                <div {...titolo} />
                <div {...indirizzo} />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div {...contattiTitolo1} />
                <div className="text-base text-[#252525]">
                  Tel:
                  <a {...telefono1} />
                  <br />
                </div>
                <div className="text-base text-[#252525]">
                  Fax:
                  <a {...fax1} />
                  <br />
                </div>
                <div className="text-base text-[#252525]">
                  E-Mail:
                  <a {...email1} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div {...contattiTitolo2} />
                <div className="text-base text-[#252525]">
                  Tel:
                  <a {...telefono2} />
                  <br />
                </div>
                <div className="text-base text-[#252525]">
                  Fax:
                  <a {...fax2} />
                  <br />
                </div>
                <div className="text-base text-[#252525]">
                  E-Mail:
                  <a {...email2} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div {...seguiciTitolo} />
                <div className="flex gap-3 lg:justify-start justify-center mt-3">
                  <a
                    href="https://www.facebook.com/dogedivenezia/?fref=ts"
                    target="_blank"
                    className="hover:text-[#0265A5]"
                  >
                    <div className="rounded-full flex items-center justify-center border border-dark w-10 h-10 hover:border-[#0265A5] hover:text-[#0265A5]">
                      {iconaFacebook}
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/ildogedivenezia_"
                    target="_blank"
                    className="hover:text-[#0265A5]"
                  >
                    <div className="rounded-full flex items-center justify-center border border-dark w-10 h-10 hover:border-[#0265A5] hover:text-[#0265A5]">
                      {iconaInstagram}
                    </div>
                  </a>
                  <a
                    href="https://x.com/DogeNavigazioni"
                    target="_blank"
                    className="hover:text-[#0265A5]"
                  >
                    <div className="rounded-full flex items-center justify-center border border-dark w-10 h-10 hover:border-[#0265A5] hover:text-[#0265A5]">
                      {iconaTwitter}
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div {...pagamentoTitolo} />
                <div className="flex gap-3">
                  <div className="relative h-20 w-full mt-4">
                    <Image {...pagamentoImmagine} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0265A5] text-white text-xs md:text-sm">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left py-6 lg:py-2 text-sm">
          <div className="flex">
            <div>
              {infoAzienda.children} <a {...privacyLink} /> &amp;{" "}
              <span {...cookiePolicy} />
            </div>
          </div>
          <div className="text-center md:text-end py-3 md:py-0">
            <div>
              {sviluppatoDa.children}{" "}
              <strong className="underline">
                <a {...mediacyLink} />
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
