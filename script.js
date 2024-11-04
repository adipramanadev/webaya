//buat fungsi untuk menyimpan data di browser 
function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    localStorage.setItem('note', noteInput);
    displayNote();
}


//fungsi untuk menghapus data 
function deleteNote() {
    localStorage.removeItem('note');
    displayNote();
}

//fungsi untuk menampilkan data 
function displayNote(){
    const saveNote = localStorage.getItem('note');
    const noteDisplay = document.getElementById('saveNote');
    if (saveNote) {
        noteDisplay.textContent = `Catatan tersimpan : ${saveNote}`;
    }else{
        noteDisplay.textContent = 'Tidak Catatan tersimpan';
    }
}

//event listener untuk tombol simpan 
document.getElementById('saveButton').addEventListener('click', saveNote);
//event listner untuk hapus data
document.getElementById('clearButton').addEventListener('click', deleteNote);