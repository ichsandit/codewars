const filterLongWords = (sentence, n) =>
    sentence.split(` `).filter(val => val.length > n);
