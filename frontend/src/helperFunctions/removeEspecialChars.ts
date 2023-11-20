export const removeEspecialChars = function (text: string) {
    if (text) {
        let newText = text
            .replaceAll('#', '')
            .replaceAll('##', '')
            .replaceAll('**', '')

        return newText
    }
}