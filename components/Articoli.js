import Link from 'next/link'
import Date from '/components/Date'

import Container from '@mui/material/Container'


export default function Articoli({dati}) {
    return (
        <Container maxWidth="lg">
            <h2>Blog & Notizie</h2>

            <ul>
                {dati.map(
                    ({ id, date, title }) => (
                        <li key={id}>
                            <Link href={'/articoli/' + id}>{title}</Link>
                            <br />
                            <small><Date dateString={date} /></small>
                            <br />
                        </li>
                    )
                )}
            </ul>
        </Container>
    )
}
