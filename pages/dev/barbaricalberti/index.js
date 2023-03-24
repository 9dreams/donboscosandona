import LandingHero from "/dev/barbaricalbertic/LandingHero"

let menu = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
]

export default function Pages() {
    return (
        <>
            <Container sx={{ alignContent: 'center', height: '100vh' }}>
                <center>
                    <br />
                    <h1>Some of Our Aweson Products - 2</h1>
                </center>

                <center>
                    <Typography variant="subtitle1" sx={{ color: 'grey' }}>This is the paragraph where you can write more details about your projects. Keep you user <br /> engaged providing meaningful information</Typography>
                </center>

                <Box marginTop="90px" display="flex" flexWrap="wrap" sx={{ p: { xs: 3, md: 6 }, pr: { md: 0 } }} products={products} >
                    <Products
                        title="Some of Our Awesome Products"
                        description="This is the paragraph......."
                        cardWidth={4}
                        products={products}
                    />
                </Box>
            </Container>
        </>
    )
}

const products = [
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        immagineUrl: "https://www.tmedia.it/2019/wp-content/uploads/2021/07/spletna-tmedia-04-500x500.png",
        url:"https://books.donboscosandona.it/containers/117?pagina_id=462"
    },
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        immagineUrl: "https://www.smartworld.it/wp-content/uploads/mobile/2018/10/apple-ipad-pro-2018-download-wallpaper-8-500x500.jpg",
        url:"https://books.donboscosandona.it/containers/117?pagina_id=462"
    },
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        immagineUrl: "https://www.tec-artigrafiche.it/wp-content/uploads/2019/12/Lion-.-1600x1115_stampa-500x500.jpg",
        url:"https://books.donboscosandona.it/containers/117?pagina_id=462"
    },
]



