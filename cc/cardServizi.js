import Image from "next/image";

export default function CardServizi({
  urlImmagine,
  altImmagine,
  titolo,
  descrizioneservizio,
  testoBottonePrenota,
}) {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col min-h-[400px]">
      <div className="mb-6 rounded-lg shadow-sm overflow-hidden group flex flex-col min-h-full">
        <div className="relative w-full h-48">
          <Image
            src={urlImmagine}
            alt={altImmagine}
            layout="responsive"
            width={500}
            height={300}
            className="rounded-t-lg object-cover"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 lg:p-6 relative z-10 bg-[#FAFAFA] rounded-b-lg w-full flex flex-col justify-between h-full">
          <h2 className="text-xl lg:text-2xl font-light text-[#323232] mb-3 lg:mb-4 mt-2 leading-tight truncate">
            {titolo}
          </h2>

          <div className="flex flex-wrap gap-x-1 gap-y-0.5 text-[#666666] flex-grow mb-4">
            <div className="text-left w-full">{descrizioneservizio}</div>
          </div>

          <div className="flex items-center gap-6 mt-auto">
            <a href="">
            <button
              type="button"
              className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {testoBottonePrenota}
            </button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
