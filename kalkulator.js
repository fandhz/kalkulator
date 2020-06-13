var tampil = document.formAngka.isiText; 
function ins(num) {
	tampil.value += num;
}
function hasil() {
	tampil.value=eval(tampil.value);//fungsi untuk hasil
}
function hapus() {
	tampil.value=tampil.value.substr(0,tampil.value.length-1);//fungsi untuk menghapus data
}
function hapusAll() { //fungsi untuk menghapus semua data 
	tampil.value="";
}