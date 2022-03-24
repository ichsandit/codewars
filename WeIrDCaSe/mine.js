function toWeirdCase(string){
    return string.split(" ").map((v, i) => `${v.charAt(0).toUpperCase() + v.slice(1)}`.split("").map((value, index) => index % 2 === 0 ? value.toUpperCase() : value).join("")).join(" ");
}
