import { parseISO } from 'date-fns';

export default function Date2({ dateString }) {
  var options = {'weekday': 'long', 'month': 'long', 'day': 'numeric', 'year': 'numeric'};
  if (dateString) {
    const date = parseISO(dateString).toLocaleString('it-IT', options);
    return <div>{date}</div>
  }
  else {
    return ''
  }
}
