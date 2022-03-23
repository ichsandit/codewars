const reverseSeq = n => {
    var result = [];
    while(n>0) {
        result.push(n);
        n--;
    }
    return result;
};
