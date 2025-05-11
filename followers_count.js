let count = 0; // Initialize count to 0

function displayCount(){
    document.getElementById('countDisplay').innerText = count; 
}

function increaseCount() {
  count++; // Tambah count sebanyak 1
  displayCount(); // Tampilkan count
  checkCountValue() ;
}

function checkCountValue() {
  if (count === 10) {
    alert("Postingan Instagram Anda mendapatkan 10 pengikut! Selamat!");
  } else if (count === 20) {
    alert("Postingan Instagram Anda mendapatkan 20 pengikut! Teruskan!");
  }
}