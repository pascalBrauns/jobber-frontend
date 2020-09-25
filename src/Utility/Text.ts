class Text {
  static capitalize = (text: string) => (
    text[0].toUpperCase() + text.substring(1)
  );

  static beginsWith = (text: string, pattern: string) => (
    text.substring(pattern.length) === pattern
  );
}

export default Text;
