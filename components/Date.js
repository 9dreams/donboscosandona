import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (dateString) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'd MMMM yyyy')}</time>
  }
  else {
    return ''
  }
}
