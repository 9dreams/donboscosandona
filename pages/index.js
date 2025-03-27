"use client"; // Aggiungi questa direttiva in cima al file

import ChiSiamo from '@/components2/ChiSiamo';
import VieniATrovarci from '@/components2/VieniATrovarci';
import { News, NavBar } from '/components2';
import { useState } from "react";
import FlipCardLayout from '@/components2/FlipCardLayout';
import FlipCard from '@/components2/FlipCard';


export default function Home({ data, elementi }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            {/* NavBar */}
            <NavBar />
            

            {/* Hero */}
            <div className="p-5 rounded-2xl bg-cover bg-center relative mt-20">
                <div
                    className="relative p-15 h-[500px] w-full rounded-2xl text-white bg-cover bg-[top_40%] overflow-hidden"
                    style={{ backgroundImage: "url('/images/HeroFoto.jpg')" }}
                >
                    {/* Overlay scuro */}
                    <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div>

                    {/* Testo Hero */}
                    <div className="absolute bottom-8 p-8 flex flex-col items-start z-10">
                        <h1 className="font-bold text-5xl text-start">Benvenuti</h1>
                        <p className="font-medium text-white text-3xl">
                            Non sentirti come a casa tua perché sei a casa tua!!
                        </p>
                    </div>
                </div>
            </div>

            {/* News */}
            
            <News title='News' data={data} limit={3} />

            {/* Chi siamo? */}
            <ChiSiamo />

            {/* Card Animata (aggiunta alla fine) */}
            <h1 className='text-5xl mr-1/2 text-center mb-10 mt-16'>Servizi</h1>
            <FlipCardLayout  />

            {/* Vieni a Trovarci */}
            <div className='mt-14' ></div>
            <VieniATrovarci />


            <footer className="bg-blue-400 text-white py-10 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">


                    {/* Contatti */}
                    <div className="flex flex-col ml-12">
                        <h2 className="text-2xl  mb-4">Contatti</h2>
                        <p>Telefono: 0421 330807</p>
                        <p>PROTOCOLLO: info@cdrmonumento.com</p>
                        <p>PRESIDENZA: presidente@cdrmomumento.com</p>
                        <p>DIREZIONE: direttore@cdrmonumento.com</p>
                        <p>CONTABILITA' E RETTE: contabilita@cdrmonumento.com</p>
                        <br></br>
                        <p>PEC: cdrmonumento@halleypec.it</p>
                    </div>

                    {/* Link */}
                    <div className="flex flex-col ml-14">
                        <h2 className="text-2xl  mb-4">Altro </h2>
                        <p>Amministrazione trasparente</p>
                        <p>Albo pretorio online</p>
                        <p>PagoPa</p>
                        <p>Privacy</p>
                        
                    </div>

                    

                    {/* Mappa - Posizionata a destra */}
                    <div className="flex flex-col md:col-span-1 mr-5">
                        <h2 className="text-2xl  mb-4">Dove Siamo</h2>
                        <div className="h-64 w-full rounded-xl overflow-hidden">
                            <img
                                src="https://cdn.pacer.cc/route/screenshot/u20gw_20200225_82.png"
                                width="100%"
                                height="100%"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>

            
        </footer>



        </>
    );
}






News.defaultProps = {
    title: 'News',
    limit: 6,
    defaultTag: '',
};

export async function getStaticProps() {
    const resData = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio');
    const data = await resData.json();

    const resElementi = await fetch('https://channels.donboscosandona.it/api/posts/donboscosandona_elements');
    const elementi = await resElementi.json();

    return {
        props: { data, elementi },
        revalidate: 1800, 
    };
}