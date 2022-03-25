function pigIt(str){
    var marks = ['!', ',', '.', '?', ':', ';'];
    var arrStr = str.split(" ").map(v => marks.includes(v) ? v : v.substring(1) + v.substring(0,1) + "ay");
    return arrStr.join(" ");
}
