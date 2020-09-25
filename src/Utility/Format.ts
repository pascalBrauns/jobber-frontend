class Format {
  static digits = (text: string, count: number, fill: string) => (
    Array(count -text.length).fill(null).map(() => fill) + text
  );

  static time = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return [
      hours.toString(),
      minutes.toString()
    ].map(text => Format.digits(text, 2, '0')).join(':');
  }

  static date = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() +1;
    const year = date.getFullYear();

    return [
      ...[
        day.toString(),
        month.toString()
      ].map(text => Format.digits(text, 2, '0')),
      year,
    ].join('.');
  }
}

export default Format;
