function alphabetPosition(text) {
    return (text.match(/[a-z]/gi)||[]).map(v => parseInt(v, 36) - 9).join(" ");
}
