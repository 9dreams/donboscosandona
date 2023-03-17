import { Container } from "@mui/system"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"


export default function Product(props){
    return(
        <Container sx={{alignContent:'center', height:'100vh'}}>
            <center>
                <h1>Some of Our Aweson Products - 2</h1>
            </center>
            <center>
                <Typography variant="subtitle2" sx={{color: 'grey'}}>This is the paragraph where you can write more details about your projects. Keep you user <br/> engaged providing meaningful information</Typography>
            </center>
            <Box marginTop="150px" display="flex">   
            
                <Typography variant="h5">
                    ciao
                </Typography>  
            </Box>
            
        </Container>
    )
}