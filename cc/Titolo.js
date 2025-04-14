export default function Titolo({ titolo1, titolo2, titolo3, venezia }) {
  return (
    <div className="container mx-auto lg:py-24 py-12">
      <div className="lg:text-2xl text-lg text-dark font-light mb-4 lg:text-left text-left pl-4 lg:pl-0">
        <p className="text-[#252525]">{titolo1}</p>
      </div>

      <div className="lg:text-5xl text-2xl text-dark font-light mb-2 text-[#252525] lg:text-left text-left pl-4 lg:pl-0">
        <p>
          {titolo2}{" "}
          <span className="text-[#99006e] font-semibold">{venezia}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12">
        <p className="text-base mt-3 text-[#252525] lg:text-left text-left pl-4 lg:pl-0">
          {titolo3}
        </p>
      </div>
    </div>
  );
}
