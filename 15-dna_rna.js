const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); // "GCAU"
