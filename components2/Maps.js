import Container from "@mui/material/Container"
import styles from '/components/Maps.module.css'

export default function Maps(props) {
    return (
        <Container className={styles.map} maxWidth={props.maxWidth} disableGutters={true}>
            <iframe src={props.url} width="100%" height={props.maxHeight} style={{border: '0'}}></iframe>
        </Container>
    )
}
