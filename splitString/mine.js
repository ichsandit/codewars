function solution(str){
    if (!str.length) return [];
    if (str.length % 2) return str.concat("_").match(/.{1,2}/g);
    return str.match(/.{1,2}/g);
}
