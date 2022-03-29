function count (string) {
    var result = {};

    for(let i = 0; i < string.length; i++) {
        if(result.hasOwnProperty(string[i])){
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }

    return result;
}
