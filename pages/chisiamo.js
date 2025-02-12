export default function Chisiamo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex md:flex-row w-full bg-[#38ADA9] p-3 flex-col mb-5 items-center mx-auto border-b border-gray-300 justify-between">
        <div className=" flex justify-center ml-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/3c22/c86e/0f4ed4c029a298b476cddafa4395ed7b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XO4UFgMbNgjiYQiD8AyhLj8CpyYmc3~cOMotNU-uWjlcz0JjUGmk1XO4Ye4COAtzbzhwFBEpuekZlOFHenMd6d0jG6UC8frjAJ9aXAiKv0HQ7SbLoJoDCyFpo4l7iYhJFAs7e5qs9wBhB-045XNFnl7F8qViVWES8tVAGOPoOc~55FUchjqh325K5dCdSpjAc9LMEoFr-SzWqTcSH82ygwk0gLuxpjv-i74ts2NitA~h~Eemk0rvSf4~gCN7XeNLKQBb-zL3OdAPrGguU67TzKAWg0ZlNMUOXCO5Pg6YZECW84n2eH8fmb7sq8gf-pbZdOp8DcQrvy2fniysrisPmA__"
            className="w-12 rounded-full"
            alt="Logo"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
          <p className="font-bold text-[#B8E994]">Home Page</p>
          <p className="font-bold text-white hover:text-[#B8E994]">
            Chi Siamo
          </p>
          <p className="font-bold text-white hover:text-[#B8E994]">
            Dove Siamo
          </p>
          <p className="font-bold text-white hover:text-[#B8E994]">
            Trasparenza
          </p>
          <p className="font-bold text-white hover:text-[#B8E994]">
            Servizi
          </p>
        </div>
        <div class='mr-10'>
            <input type='placeholder' placeholder="Ricerca" class='shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-1 text-white font-semibold bg-[#079992] '></input>
        </div>
      </div>
    </div>
  );
}
