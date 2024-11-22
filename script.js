const photos = [
    "assets/photos/photo1.jpg",
    "assets/photos/photo2.jpg",
    "assets/photos/photo3.jpg",
    "assets/photos/photo4.jpg",
    "assets/photos/photo5.jpg",
    "assets/photos/photo6.jpg",
    "assets/photos/photo7.jpg",
    "assets/photos/photo8.jpg",
    "assets/photos/photo9.jpg",
    "assets/photos/photo10.jpg",
    "assets/photos/photo11.jpg",
    "assets/photos/photo12.jpg",
    "assets/photos/photo13.jpg",
    "assets/photos/photo14.jpg",
    "assets/photos/photo15.jpg",
    "assets/photos/photo16.jpg",
    "assets/photos/photo17.jpg",
    "assets/photos/photo18.jpg",
    "assets/photos/photo19.jpg",
    "assets/photos/photo20.jpg",
    "assets/photos/photo21.jpg",
    "assets/photos/photo22.jpg",
    "assets/photos/photo23.jpg",
    "assets/photos/photo24.jpg",
    "assets/photos/photo25.jpg"
];

const textArray = [
    "Sayang, sebenarnya aku 💖.<br> Sangat mencintaimu.<br> Selalu ada di hatiku.",
    "Kamu adalah alasan senyumku 😊.<br> Setiap hari aku senang.<br> Tak lelah membuatku bahagia.",
    "Setiap detik bersamamu 🌹.<br> Anugerah yang tak ternilai.<br> Semoga kita selalu bersama.",
    "Aku ingin menghabiskan 💍.<br> Sisa hidupku denganmu.<br> Menjadi pasangan sejiwa.",
    "Matahari pun cemburu ☀️.<br> Melihat sinar matamu.<br> Kamu adalah cahaya dalam hidupku.",
    "Setiap sentuhanmu 💓.<br> Hatiku berdegup lebih kencang.<br> Hanya milikmu.",
    "Terimakasih sudah 🥰.<br> Menjadi pelengkap hidupku.<br> Kamu adalah segalanya.",
    "Kamu adalah kisah 📖💞.<br> Terindah dalam hidupku.<br> Kenangan terindah selalu ada.",
    "Aku tidak bisa 💑.<br> Bayangkan hidup tanpa kamu.<br> Kamu adalah bagian dari diriku.",
    "Bersamamu, aku merasa 🌟.<br> Pribadi yang lebih baik.<br> Terima kasih telah mencintaiku.",
    "Cinta kita adalah 🚗💖.<br> Perjalanan terindah yang pernah aku jalani.<br> Setiap kilometer penuh kebahagiaan.",
    "Senyumanmu adalah 😘.<br> Obat terbaik untuk hari-hariku.<br> Tak ada yang lebih menyenangkan.",
    "Tak ada kata 💘.<br> Yang cukup untuk mengungkapkan.<br> Betapa aku mencintaimu.",
    "Kamu adalah impian 🌙✨.<br> Yang menjadi kenyataan.<br> Keajaiban terindah yang terjadi.",
    "Kamu adalah bintang 🌌.<br> Yang membuat langit malamku.<br> Lebih indah setiap malam.",
    "Setiap momen 📸💫.<br> Bersamamu adalah kenangan.<br> Tak ada yang lebih berharga.",
    "Bersamamu, dunia terasa 🌍💓.<br> Lebih sempurna dan utuh.<br> Kamu adalah segalanya yang aku butuhkan.",
    "Mencintaimu adalah 💖.<br> Hal terindah yang pernah terjadi.<br> Ini adalah kisah kita.",
    "Setiap detik 💔.<br> Tanpamu rasanya hilang arah.<br> Hanya kamu yang membuatku lengkap.",
    "Aku merasa sangat 🍀.<br> Beruntung memiliki kamu.<br> Setiap hari adalah berkat karena kamu.",
    "Bersamamu, aku merasa 🏠❤️.<br> Rumahku ada di mana saja.<br> Karena hatiku selalu di sisimu.",
    "Cinta ini lebih 💕.<br> Indah karena ada kamu.<br> Tanpamu, cinta ini tak berarti.",
    "Setiap kata 🙏💖.<br> Darimu adalah doa.<br> Yang menenangkan hatiku.",
    "Denganmu, aku tidak 😊💫.<br> Perlu mencari kebahagiaan.<br> Karena aku sudah menemukannya.",
    "Aku ingin setiap 😄.<br> Detik dalam hidupku dipenuhi.<br> Dengan senyumanmu.",
    "Kamu adalah alasan 💌.<br> Aku percaya bahwa cinta itu nyata.<br> Karena kamu, aku percaya pada keajaiban.",
    "Aku akan selalu 💕🌹.<br> Mencintaimu, sampai kapan pun.<br> Selamanya, aku akan ada di sini."
];

let currentPhotoIndex = 0;
let slideInterval;
let isSliding = true;

// Elemen DOM
const openAlbumButton = document.getElementById('openAlbum');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const textContainer = document.getElementById('textContainer');
const nextPhotoButton = document.getElementById('nextPhoto');
const prevPhotoButton = document.getElementById('prevPhoto');
const toggleSlideButton = document.getElementById('toggleSlide');
const toggleIcon = document.getElementById('toggleIcon');
const backgroundAudio = document.getElementById('backgroundAudio');

// Ketika tombol "Buka Album" diklik
openAlbumButton.addEventListener('click', () => {
    photoModal.style.display = 'flex';
    modalImage.src = photos[currentPhotoIndex];
    textContainer.innerHTML = textArray[currentPhotoIndex];
    backgroundAudio.play();
    startSlideShow(); // Memulai slide otomatis
});

// Fungsi untuk memulai slide otomatis
function startSlideShow() {
    slideInterval = setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        modalImage.src = photos[currentPhotoIndex];
        textContainer.innerHTML = textArray[currentPhotoIndex];
    }, 7000); // Ubah interval jika perlu
    isSliding = true; // Tandai bahwa slide berjalan
    toggleIcon.textContent = "pause"; // Mengubah ikon menjadi pause
    toggleSlideButton.title = "Hentikan Slide";
    backgroundAudio.play(); // Pastikan audio mulai diputar
}

// Fungsi untuk menghentikan slide
function stopSlideShow() {
    clearInterval(slideInterval); // Menghentikan interval
    isSliding = false; // Tandai bahwa slide berhenti
    toggleIcon.textContent = "play_arrow"; // Mengubah ikon menjadi play
    toggleSlideButton.title = "Lanjutkan Slide";
    backgroundAudio.pause(); // Hentikan musik
}

// Tombol "Hentikan Slide" untuk menghentikan/melanjutkan
toggleSlideButton.addEventListener('click', () => {
    if (isSliding) {
        stopSlideShow();
    } else {
        startSlideShow();
    }
});

// Tombol "Foto Berikutnya"
nextPhotoButton.addEventListener('click', () => {
    stopSlideShow(); // Berhenti jika tombol manual digunakan
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    modalImage.src = photos[currentPhotoIndex];
    textContainer.innerHTML = textArray[currentPhotoIndex];
});

// Tombol "Foto Sebelumnya"
prevPhotoButton.addEventListener('click', () => {
    stopSlideShow(); // Berhenti jika tombol manual digunakan
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    modalImage.src = photos[currentPhotoIndex];
    textContainer.innerHTML = textArray[currentPhotoIndex];
});
// Fungsi untuk membuat daun jatuh
function createFallingLeaf() {
    const leaf = document.createElement('img');
    leaf.src = "https://upload.wikimedia.org/wikipedia/commons/4/46/Leaf_in_November.jpg"; // Gambar daun dengan transparansi latar belakang
    leaf.classList.add('falling-leaf');
    
    // Set posisi acak untuk daun
    leaf.style.left = `${Math.random() * 100}%`; // Posisi acak dari kiri
    leaf.style.animationDuration = `${Math.random() * 3 + 3}s`; // Durasi acak antara 3-6 detik
    leaf.style.animationDelay = `${Math.random() * 2}s`; // Delay acak untuk variasi waktu mulai

    // Menambahkan daun ke dalam halaman
    document.body.appendChild(leaf); // Menambahkan langsung ke body

    // Menghapus daun setelah animasi selesai untuk menghindari tumpukan elemen
    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

// Membuat daun baru setiap 200ms
setInterval(createFallingLeaf, 200);


// Fungsi untuk membuat salju jatuh
function createFallingSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('falling-snow');
    
    // Set posisi acak untuk salju
    snowflake.style.left = `${Math.random() * 100}%`; // Posisi acak dari kiri
    snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`; // Durasi acak antara 3-6 detik
    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Delay acak untuk variasi waktu mulai

    // Menambahkan salju ke dalam halaman
    document.body.appendChild(snowflake); // Menambahkan langsung ke body

    // Menghapus salju setelah animasi selesai untuk menghindari tumpukan elemen
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Membuat salju baru setiap 200ms
setInterval(createFallingSnow, 200);

