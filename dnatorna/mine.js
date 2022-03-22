const DNAtoRNA = function (dna) {
    var rna = '';
    dna.split("").map(v => {
        if (v === "T") {
            rna += "U";
        } else {
            rna += v;
        }
    })

    return rna;
}
