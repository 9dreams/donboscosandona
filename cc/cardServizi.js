import Image from "next/image";

export default function CardServizi({
  urlImmagine,
  altImmagine,
  titolo,
  descrizioneservizio,
  testoBottonePrenota, // aggiunto qui
}) {
  return (
    <div className="max-w-[474px] mr-6">
      <div className="mb-6 rounded-[2rem] shadow overflow-hidden group">
        <div className="relative w-full h-72">
          <Image
            src={urlImmagine}
            alt={altImmagine}
            fill
            className="rounded-t-[1.5rem] object-cover"
            sizes="(max-width: 1024px) calc(100vw / 1.15), (max-width: 1280px) calc(100vw / 2), calc(100vw / 3)"
          />
        </div>

        <div className="p-6 lg:p-12 relative z-10 bg-[#FAFAFA] rounded-b-[2rem] w-full">
          <h2 className="text-xl lg:text-3xl font-light text-[#666666] mb-3 lg:mb-3 mt-3 leading-tight line-clamp-2 lg:h-[4.5rem] h-[4.3rem]">
            {titolo}
          </h2>

          <div className="flex flex-wrap gap-x-1 gap-y-0.5 text-[#666666]">
            <div className="text-left w-full">{descrizioneservizio}</div>
          </div>

          <div className="flex items-center gap-6 my-6">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {" "}
              {testoBottonePrenota}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
