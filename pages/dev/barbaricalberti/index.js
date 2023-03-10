import Paper from '@mui/material/Paper'
import LandingHero from "/dev/barbaricalbertic/LandingHero"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Pagina() {
    return (
        <>
            <LandingHero

                siteName="CFP DON BOSCO"
                title="Your Story Starts With Us."
                description="Every landing page needs a small description......."
                buttonText="guarda il video"
                buttonUrl={'https://www.google.com/search?q=don+bosco+san+dona&rlz=1C5CHFA_enIT1043IT1043&sxsrf=AJOqlzVg-sKZ-1WAUk3CxBJN5y75sfRU6g:1678458139242&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfsaPpx9H9AhUfZ_EDHfodBWEQ_AUoAXoECAEQAw&biw=1470&bih=840&dpr=2#imgrc=dM8yptSUkOYDGM'}
                imageUrl={'https://www.cnosfapveneto.it/wp-content/uploads/2016/11/CFP-Don-Bosco-San-Don%C3%A0-di-Piave-1024x662.jpg'}
                />           
        </>
    )
}

