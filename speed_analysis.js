let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  // Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  // Nonaktifkan input pengguna
  document.getElementById("userInput").readOnly = true;

  // Hitung waktu yang berlalu dan kata per menit (WPM)
  var timeElapsed = (endTime - startTime) / 1000; // dalam detik
  var userTypedText = document.getElementById("userInput").value;

  var totalLenght = userTypedText.length;
  // Pisahkan teks menggunakan regex untuk menghitung kata dengan benar
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0; // Nilai default

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  // Tampilkan hasil
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Hasil Tes Ketik:</h2>" +
    "<p> panjang total: " +
    totalLenght +
    "<p>Kata yang Diketik: " +
    typedWords +
    "</p>" +
    "<p>Waktu yang Berlalu: " +
    timeElapsed.toFixed(2) +
    " detik</p>" +
    "<p>Kata Per Menit (WPM): " +
    wpm +
    "</p>";

  // Reset tombol
  var button = document.getElementById("btn");
  button.innerHTML = "Mulai Tes";
  button.onclick = startTest;
}
