class Random {
  static boolean = () => Boolean(Math.round(Math.random()));
  static index = <T>(array: T[]) => (
    Math.round(Math.random() * (array.length -1))
  );

  static number = (minimum: number, maximum: number) => (
    minimum + Math.round((maximum - minimum) * Math.random())
  )
}

export default Random;
