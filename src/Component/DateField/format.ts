import Format from 'Utility/Format';

const format = (date: Date) => [
  Format.date(new Date(date)),
  Format.time(new Date(date))
].join(' ');

export default format;
