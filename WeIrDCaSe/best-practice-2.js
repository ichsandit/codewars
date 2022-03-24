function toWeirdCaseCharacter(chr, index)
{
    return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
    return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
    return string.split(" ").map(toWeirdCaseWord).join(" ");
}
