import Image from "next/image";

export default function ContainerImmagini() {
  return (
    <div className="mt-10 max-w-4xl mx-auto grid grid-cols-4 gap-4">
      {/* Servizio 1 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizidisposizione/spiaggia_privata.png"
            alt="Servizio 1"
            layout="fixed"
            width={80}
            height={80}
            className="rounded-full object-contain"
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 120px, 120px"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 1</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 1</p>
      </div>

      {/* Servizio 2 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio3.png"
            alt="Servizio 3"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 2</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 2</p>
      </div>

      {/* Servizio 3 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio3.png"
            alt="Servizio 3"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 3</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 3</p>
      </div>

      {/* Servizio 4 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio3.png"
            alt="Servizio 3"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 4</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 4</p>
      </div>

      {/* Servizio 5 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio3.png"
            alt="Servizio 3"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 5</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 5</p>
      </div>

      {/* Servizio 6 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio6.png"
            alt="Servizio 6"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 6</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 6</p>
      </div>

      {/* Servizio 7 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio7.png"
            alt="Servizio 7"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 7</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 7</p>
      </div>

      {/* Servizio 8 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio8.png"
            alt="Servizio 8"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 8</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 8</p>
      </div>

      {/* Servizio 9 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio9.png"
            alt="Servizio 9"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 9</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 9</p>
      </div>

      {/* Servizio 10 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizio10.png"
            alt="Servizio 10"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 10</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 10</p>
      </div>

      {/* Servizio 11 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizidisposizione/spiaggia_privata.png"
            alt="Servizio 11"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 11</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 11</p>
      </div>

      {/* Servizio 12 */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/servizidisposizione/spiaggia_privata.png"
            alt="Servizio 12"
            layout="responsive"
            width={20}
            height={20}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center">Titolo 12</h2>
        <p className="text-sm text-center text-[#666666]">Descrizione 12</p>
      </div>
    </div>
  );
}
