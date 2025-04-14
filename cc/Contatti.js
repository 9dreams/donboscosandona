import Image from "next/image";

export default function Contatti({
  titoloSezione,
  descrizione,
  titoloContattiSuMisura,
  telefonoSuMisura,
  emailSuMisura,
  titoloContattiIndividuali,
  telefonoIndividuali,
  emailIndividuali,
  coordinateMappa,
  immagineTelefono,
  immagineEmail,
  altImmagineTelefono,
  altImmagineEmail,
}) {
  return (
    <section className="container mx-auto px-6 lg:px-0 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-y-12 lg:gap-x-12">
        <div className="lg:col-start-1 lg:row-start-1 row-start-2">
          <div className="flex flex-col space-y-3 lg:mb-6 mb-3">
            <div className="text-[#99006E] text-[1.5rem] font-normal">
              {titoloSezione}
            </div>
            <div className="text-[#252525]">{descrizione}</div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-[#99006E] text-[1.125rem] font-normal">
              {titoloContattiSuMisura}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-3 lg:mt-6 lg:mb-12 my-6">
              <a
                href={`tel:${telefonoSuMisura}`}
                className="group hover:text-[#99006E] bg-[#fafafa] rounded-[2rem] lg:py-12 lg:px-12 py-6 px-6 flex flex-col space-y-2 items-center"
              >
                <Image
                  alt={altImmagineTelefono}
                  src={immagineTelefono}
                  width={30}
                  height={52}
                  className="lg:mb-6 mb-3"
                />
                <div className="lg:text-[1rem] text-[0.875rem] text-[#252525] group-hover:text-[#99006E]">
                  {telefonoSuMisura}
                </div>
              </a>
              <a
                href={`mailto:${emailSuMisura}`}
                className="group hover:text-[#99006E] bg-[#FAFAFA] rounded-[2rem] lg:py-12 lg:px-12 py-6 px-6 flex flex-col space-y-2 items-center"
              >
                <Image
                  alt={altImmagineEmail}
                  src={immagineEmail}
                  width={46}
                  height={46}
                  className="lg:mb-6 mb-3"
                />
                <div className="lg:text-[1rem] text-[0.875rem] text-[#252525] group-hover:text-[#99006E]">
                  {emailSuMisura}
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-[#99006E] text-[1.125rem] font-normal">
              {titoloContattiIndividuali}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-3 lg:mt-6 lg:mb-12 my-6">
              <a
                href={`tel:${telefonoIndividuali}`}
                className="group hover:text-[#99006E] bg-[#FAFAFA] rounded-[2rem] lg:py-12 lg:px-12 py-6 px-6 flex flex-col space-y-2 items-center"
              >
                <Image
                  alt="Tel"
                  src="/images/contatti/phone1__.png"
                  width={30}
                  height={52}
                  className="lg:mb-6 mb-3"
                />
                <div className="lg:text-[1rem] text-[0.875rem] text-[#252525] group-hover:text-[#99006E]">
                  {telefonoIndividuali}
                </div>
              </a>
              <a
                href={`mailto:${emailIndividuali}`}
                className="group hover:text-[#99006E] bg-[#FAFAFA] rounded-[2rem] lg:py-12 lg:px-12 py-6 px-6 flex flex-col space-y-2 items-center"
              >
                <Image
                  alt="Mail"
                  src="/images/contatti/contact_email.png"
                  width={46}
                  height={46}
                  className="lg:mb-6 mb-3"
                />
                <div className="lg:text-[1rem] text-[0.875rem] text-[#252525] group-hover:text-[#99006E]">
                  {emailIndividuali}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 row-start-1 lg:h-[42.5rem] h-96">
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
            <iframe
              src={coordinateMappa}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa di Venezia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
