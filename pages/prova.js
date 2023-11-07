import { Torneo } from "@/components"
import Styles from "@/components/Torneo.module.css"

export default function Page({ data }) {
    return (
        <div>
            <h1 className={Styles.titolo1}>Ciao</h1>
        </div>
    )
}
// mettere id solo su quelli nel podio
let classi = [
    { classe: "1A", punti: "199" },
    { classe: "1B", punti: "230", id: "2" },
    { classe: "1C", punti: "223", },
    { classe: "1D", punti: "183", },
    { classe: "1E", punti: "173", },
    { classe: "1F", punti: "263", id: "1" },
    { classe: "2A", punti: "189", },
    { classe: "2B", punti: "163", },
    { classe: "2C", punti: "182", },
    { classe: "2D", punti: "213", },
    { classe: "2E", punti: "160", },
    { classe: "2F", punti: "224", id: "3" },
    { classe: "3A", punti: "165", },
    { classe: "3B", punti: "126", },
    { classe: "3C", punti: "129", },
    { classe: "3D", punti: "198", },
    { classe: "3E", punti: "155", },
    { classe: "3F", punti: "220", },
    { classe: "4A", punti: "169", },
    { classe: "4B", punti: "191", },
  ];