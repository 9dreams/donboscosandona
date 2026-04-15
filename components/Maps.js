import Container from "@mui/material/Container"
import styles from '/components/Maps.module.css'

export default function Maps(props) {
    return (
        <Container className={styles.map} maxWidth={props.maxWidth} disableGutters={true}>
            <img src={props.url} width="100%" height="auto" className={`light-glitch ${styles.mapImage}`} style={{border: '0'}} alt="Proposta Estate Ragazzi Map" />
        </Container>
    )
}
