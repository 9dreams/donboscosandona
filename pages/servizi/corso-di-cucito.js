export default function Servizi() {
  return (
    <>
    <title>Corso volontari 2019 - Emporio Solidale</title>
    <link rel='icon' href='/images/servizi_favicon/favicon.ico' />

    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-10">
        <div class="flex justify-center md:ml-10">
          <img
            src="/images/Logo_emporio.png"
            class="w-24 md:w-[140px] rounded-full"
            alt="Logo"
          />
        </div>
        <div class="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
          {[
            { name: "Home Page", link: "/", class: "text-white" },
            { name: "Chi Siamo", link: "chisiamo", class: "text-white" },
            { name: "Dove Siamo", link: "dovesiamo", class: "text-white" },
            { name: "Trasparenza", link: "trasparenza", class: "text-white" },
            {
              name: "Servizi",
              link: "servizi",
              class: "text-[#C7AE6A]",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              class={`font-bold hover:text-[#C7AE6A] cursor-pointer ${item.class}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div class="mt-3 md:mt-0 md:mr-10 flex justify-center items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Ricerca"
            class="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-2 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
          />
        </div>
      </div>

      <footer class="bg-[#780202] text-white w-full">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div class="flex justify-center md:justify-start">
              <a href="#">
                <img
                  src="/images/Logo_emporio.png"
                  class="h-24"
                  alt="Emporio Logo"
                />
              </a>
            </div>
            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Emporio solidale
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Del basso Piave
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    0421-332697
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    344 3851626
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-500" />
          <div class="flex flex-col sm:flex-row items-center justify-between">
            <span class="text-sm text-gray-300">
              © 2025{" "}
              <a href="#" class="hover:underline">
                Emporio Solidale™
              </a>
            </span>
            <div class="mt-4 sm:mt-0">
              <a href="#" class="text-gray-300 hover:text-white">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
