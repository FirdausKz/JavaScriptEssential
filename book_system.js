let books = [];
function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber,
    };
    books.push(book);
    showbooks();
    clearInputs();
  } else {
    alert("Silakan isi semua kolom dengan benar.");
  }
}

function showbooks() {
  const booksDiv = books.map(
    (book, index) =>
      `<h1>Nomor Buku: ${index + 1}</h1>
        <p><strong>Nama Buku: </strong>${book.name}</p>
        <p><strong>Nama Penulis:</strong> ${book.authorName}</p>
        <p><strong>Deskripsi Buku:</strong> ${book.bookDescription}</p>
        <p><strong>Jumlah Halaman:</strong> ${book.pagesNumber} halaman</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBooks(${index})"> Delete </button>`

  );
  document.getElementById("books").innerHTML = booksDiv.join("");
}

function editbook(index) {
  const book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;
  books.splice(index, 1); // Hapus entri lama
  showbooks(); // Segarkan daftar
}

function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}

function deleteBooks(index){
    books.splice(index, 1);
    showbooks();

}