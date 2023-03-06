import Link from 'next/link'
import Date from '/components/date'

export default function Articoli({dati}) {
    return (
        <>
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
        </>
    )
}
