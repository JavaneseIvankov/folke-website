// Menangkap semua elemen dengan class 'star'
const semuaBintang = document.querySelectorAll('.star');
const teksRating = document.getElementById('nilai-rating');

// Melakukan perulangan untuk setiap bintang
semuaBintang.forEach(function (bintang) {

    // Menambahkan event click pada masing-masing bintang
    bintang.addEventListener('click', function () {
        // Mengambil angka rating dari atribut 'data-value'
        let nilaiYangDiklik = this.getAttribute('data-value');

        // Memperbarui teks angka rating di layar
        teksRating.innerHTML = nilaiYangDiklik;

        // Memperbarui warna bintang
        semuaBintang.forEach(function (b) {
            let nilaiBintangIni = b.getAttribute('data-value');

            // Jika nilai bintang ini lebih kecil atau sama dengan yang diklik, warnai emas
            if (nilaiBintangIni <= nilaiYangDiklik) {
                b.style.color = '#ffd700'; // Warna emas
            } else {
                b.style.color = '#e0e0e0'; // Warna abu-abu kembali
            }
        });
    });
});