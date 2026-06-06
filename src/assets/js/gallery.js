document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.main-image');
  const thumbnails = document.querySelectorAll('.thumb');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  if (!mainImage || !prevArrow || !nextArrow) return;

  // Kumpulkan semua gambar unik yang ada di halaman detail produk ini
  // Mulai dengan gambar utama awal, diikuti oleh semua gambar dari thumbnails
  const images = [mainImage.getAttribute('src')];
  thumbnails.forEach(thumb => {
    const src = thumb.getAttribute('src');
    if (src && !images.includes(src)) {
      images.push(src);
    }
  });

  let currentIndex = 0;

  // Set transisi CSS secara langsung ke gambar utama agar transisi terasa halus/premium
  mainImage.style.transition = 'opacity 0.25s ease-in-out';
  mainImage.style.opacity = '1';

  function updateGallery(index) {
    // 1. Efek Fade-Out (menghilang sejenak)
    mainImage.style.opacity = '0';

    setTimeout(() => {
      // 2. Ganti sumber gambar setelah gambar menghilang
      mainImage.setAttribute('src', images[index]);
      
      // 3. Efek Fade-In (muncul kembali secara halus)
      mainImage.style.opacity = '1';
    }, 250);

    // 4. Update status visual active border pada thumbnails
    thumbnails.forEach(thumb => {
      if (thumb.getAttribute('src') === images[index]) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // Event listener saat thumbnail diklik
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('src');
      const index = images.indexOf(src);
      if (index !== -1) {
        currentIndex = index;
        updateGallery(currentIndex);
      }
    });
  });

  // Event listener saat tombol panah kanan (Next) diklik
  nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
  });

  // Event listener saat tombol panah kiri (Prev) diklik
  prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
  });
});
