function removeDuplicateWords(str) {
  // Memisahkan string menjadi array kata-kata
  const words = str.split(" ");

  // Menggunakan filter() untuk menyaring kata-kata unik
  const uniqueWords = words.filter(
    (word, index) => words.indexOf(word) === index
  );

  // Menggabungkan kata-kata menjadi string
  return uniqueWords.join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // 'alpha beta gamma delta'
