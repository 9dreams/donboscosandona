    import React from "react";

    const Navbar = () => {
    return (
        <>
        {/* Top Bar */}
        <div className="flex flex-col bg-blue-900 text-white h-8 relative">
            <img
            className="rounded-full w-[200px] h-[100px] absolute top-[-33px] left-[15px]"
            src="https://lh7-eu.googleusercontent.com/EzXHH0t8KhIrek5xJ0_aYOW4IXJxJgpW3fBr2lP84w8XxiDbGS7pesEgfGAX4qUxvEP0FOQ3Dcn9UF3tnXfMKEHMbO6fH4KGXBPsbO-me0NUGopuorCCEzpOaWmVcRl-TyahMroIZGghk3UFl6emk7UeBg=s2048"
            alt="Logo"
            />
        </div>

        {/* Navbar */}
        <nav className="bg-blue-400 shadow-md h-[72px]">
            <div className="flex items-center px-4 py-2 relative">
            <img
                className="absolute top-3 left-[15px] w-[250px] rounded-full z-10"
                src="images/logocasadiriposo.png"
                alt="Doge di Venezia Logo"
            />

            <div className="ml-auto hidden md:block">
                <ul className="font-medium flex space-x-4">
                {["Home Page", "Escursioni Giornalieri", "Servizi Professionali", "La Flotta", "Chi Siamo", "News"].map(
                    (item, index) => (
                    <li key={index}>
                        <a href="#" className="block py-2 px-3 text-white hover:text-yellow-300">
                        {item}
                        </a>
                    </li>
                    )
                )}
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
    };

    export default Navbar;
