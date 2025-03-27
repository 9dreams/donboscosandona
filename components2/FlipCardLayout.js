import React from "react";
import FlipCard from "./FlipCard";
import Image from "next/image";

const cardData = [
    {
        frontTitle: "CENTRO DIURNO 'ANCHISE' ",
        backContent: "Contenuto retro card 1",
        frontImage: "https://voitg.net/wp-content/uploads/2021/01/144366958_495561741842262_3655280759223790030_o.jpg",
        
    },
    {
        frontTitle: "CENTRO ANZIANI 'COLORA IL TUO TEMPO' ",
        backContent: "Contenuto retro card 2",
        frontImage: "https://voitg.net/wp-content/uploads/2023/07/359761452_688913269899963_1762351930510674903_n.jpg",
        
    },
    {
        frontTitle: "SERVIZIO ASSISTENZA DOMICILIARE S.A.D.",
        backContent: "Contenuto retro card 1",
        frontImage: "https://images2.corriereobjects.it/methode_image/2016/10/05/Salute/Foto%20Salute%20-%20Trattate/6-welfareFotolia_50670698_Subscription_XXL-U430001852639400gDE-192x140@Corriere-Print-Brescia-kl1G-U43230543875718J5-1224x916@Corriere-Web-Sezioni-593x443.jpg",
      
    },
    {
        frontTitle: "SPORTELLO ASSISTENTI FAMILIARI",
        backContent: "Contenuto retro card 2",
        frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2uDL_H7YhgyoS39TS7gvqd8PstDcct8hAQ&s",
       
    },
    {
        frontTitle: "PUNTO PRELIEVI 'PASSARELLA' SERVIZIO INFERMIERISTICO",
        backContent: "Contenuto retro card 1",
        frontImage: "https://www.neuromed.it/wp-content/uploads/2022/06/ambiente-medico-710x337.jpg",
       
    },


];

const FlipCardLayout = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[10px]">
    {cardData.slice(0, 2).map((card, index) => (
        <div key={index} className="w-[250px]">
            <FlipCard frontTitle={card.frontTitle} backContent={card.backContent} frontImage={card.frontImage}  />
        </div>
    ))}
</div>

<div className="flex flex-col md:flex-row justify-center items-center gap-[10px] mt-[10px]">
    {cardData.slice(2, 5).map((card, index) => (
        <div key={index} className="w-[250px]">
            <FlipCard frontTitle={card.frontTitle} backContent={card.backContent} frontImage={card.frontImage}/>
        </div>
    ))}
</div>

        </>
    );
};

export default FlipCardLayout;
