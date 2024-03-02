export const removeEspecialChars = function (text: string) {
  if (text) {
    const newText = text
      .replaceAll('#', '')
      .replaceAll('##', '')
      .replaceAll('**', '');

    return newText;
  }
};
