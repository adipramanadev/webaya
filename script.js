//buat fungsi untuk menyimpan data di browser 
function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    localStorage.setItem('note', noteInput);
}


//fungsi untuk menghapus data 
function deleteNote() {
}

//fungsi untuk menampilkan data 
function displayNote(){}

//event listener untuk tombol simpan 
document.getElementById('saveButton').addEventListener('click', saveNote);
//event listner untuk hapus data
document.getElementById('clearButton').addEventListener('click', deleteNote);