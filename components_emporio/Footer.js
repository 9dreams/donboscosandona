import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#780202] text-white w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <a href="#">
              <img
                src="/images/Logo_emporio.png"
                className="h-24"
                alt="Emporio Logo"
              />
            </a>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Emporio solidale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Del basso Piave
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">Contatti</h2>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  0421-332697
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  344 3851626
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-300">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Emporio Solidale™
            </a>
          </span>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-5 h-5"
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
  );
}
