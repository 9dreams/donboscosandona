export default function Chisiamo() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-0">
      <div className="flex justify-center md:ml-10">
        <img
          src="/images/Logo_emporio.png"
          className="w-24 md:w-[140px] rounded-full"
          alt="Logo"
        />
      </div>
      <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
        {[
          { name: "Home Page", link: "#home", class: "text-white" },
          {
            name: "Chi Siamo",
            link: "chisiamo",
            class: "text-[#C7AE6A]",
          },
          { name: "Dove Siamo", link: "dovesiamo", class: "text-white" },
          { name: "Trasparenza", link: "trasparenza", class: "text-white" },
          { name: "Servizi", link: "servizi", class: "text-white" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`font-bold hover:text-[#C7AE6A] cursor-pointer ${item.class}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-3 md:mt-0 md:mr-10 flex justify-center items-center w-full md:w-auto">
        <input
          type="text"
          placeholder="Ricerca"
          className="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-2 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
        />
      </div>
    </div>
  );
}
