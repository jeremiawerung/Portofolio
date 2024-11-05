/* ----- NAVIGATION BAR FUNCTION ----- */
/* Fungsi ini bertujuan untuk membuat navigasi menjadi responsive.
   Saat menu navigasi diklik, kelas 'responsive' ditambahkan pada elemen
   dengan id 'myNavMenu' jika kelasnya saat ini adalah 'nav-menu'. 
   Jika tidak, kelasnya kembali menjadi 'nav-menu' biasa. */
   function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
  
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  /* Event listener ini menambahkan shadow pada header ketika user melakukan scrolling.
     Fungsi ini memanggil dua fungsi saat window discroll: `headerShadow()` dan `scrollActive()`. */
  window.onscroll = function () { headerShadow(); scrollActive(); };
  
  /* Fungsi untuk menambahkan shadow pada header dan menyesuaikan tinggi header saat scrolling.
     Jika halaman discroll lebih dari 50px, shadow ditampilkan pada header, 
     serta tinggi dan line-height header disesuaikan ke 70px. Jika tidak, kembali ke 90px. */
  function headerShadow() {
    const navHeader = document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  // JavaScript untuk memicu animasi saat foto masuk ke viewport
  /* Event listener ini memicu animasi pada elemen foto saat mereka berada di viewport.
     Fungsi `showPhotos()` menambahkan kelas 'show' pada elemen dengan kelas 'photo' 
     saat mereka terlihat dalam jendela tampilan (viewport), 
     yang bisa digunakan untuk animasi CSS. */
  document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photos .photo");
  
    function showPhotos() {
      photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          photo.classList.add("show"); // Tambahkan kelas 'show' untuk memicu animasi
        }
      });
    }

    // Panggil fungsi saat pertama kali halaman dimuat
    showPhotos();
  
    // Panggil fungsi saat scroll untuk memastikan animasi tetap bekerja
    window.addEventListener("scroll", showPhotos);
  });
  
  /* ----- TYPING EFFECT ----- */
  /* Efek mengetik pada elemen dengan kelas '.typedText'. 
     Menggunakan plugin `Typed.js` untuk menampilkan teks dengan efek mengetik 
     dan menambahkan efek loop. Variabel 'typeSpeed' dan 'backSpeed' mengatur kecepatan animasi. */
  var typingEffect = new Typed(".typedText", {
    strings: ["UI/UX Designer", "Information System Student", "?"],
    loop: true,
    typeSpeed: 5,
    backSpeed: 80,
    backDelay: 2000,
  });
  
  /* ----- SCROLL REVEAL ANIMATION ----- */
  /* ScrollReveal digunakan untuk menambahkan animasi pada elemen saat mereka muncul di layar 
     selama scrolling. Konfigurasi di sini mengatur animasi untuk muncul dari atas (origin 'top'),
     dengan jarak animasi sejauh 80px, durasi 2000ms, dan reset animasi saat elemen muncul kembali. */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
  });
  
  /* Audio control */
  /* Kontrol audio yang mengatur volume audio penuh (1) saat pertama kali diputar.
     Audio akan mulai diputar setelah interaksi pertama pengguna pada halaman. */
  const audio = document.querySelector("audio");
  audio.volume = 1; // Volume penuh
  
  // Play audio on first click interaction
  document.addEventListener("click", function () {
    if (audio) {
      audio.play();
    }
  });
  
  /* Reveal Animations */
  /* Animasi ScrollReveal diterapkan pada elemen-elemen tertentu dengan kelas tertentu 
     untuk memunculkan elemen-elemen tersebut saat user scroll. */
  sr.reveal('.featured-text-card', {});
  sr.reveal('.featured-name', { delay: 100 });
  sr.reveal('.featured-text-info', { delay: 200 });
  sr.reveal('.featured-text-btn', { delay: 200 });
  sr.reveal('.social_icons', { delay: 200 });
  sr.reveal('.featured-image', { delay: 300 });
  
  sr.reveal('.project-box', { interval: 200 });
  sr.reveal('.content', { interval: 200 });
  sr.reveal('.photos', { interval: 200 });
  sr.reveal('.video', { interval: 200 });
  sr.reveal('.top-header', {});
  
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
  });
  
  srLeft.reveal('.about-info', { delay: 100 });
  srLeft.reveal('.contact-info', { delay: 100 });
  
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
  });
  
  srRight.reveal('.skills-box', { delay: 100 });
  srRight.reveal('.form-control', { delay: 100 });
  
  /* ----- CHANGE ACTIVE LINK ----- */
  /* Fungsi untuk menambahkan kelas 'active-link' pada link navigasi 
     yang sesuai dengan bagian halaman yang sedang aktif atau berada di viewport.
     Link yang aktif disorot sesuai scroll posisi pengguna. */
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.nav-menu a[href*=' + sectionId + ']')
          .classList.add('active-link');
      } else {
        document
          .querySelector('.nav-menu a[href*=' + sectionId + ']')
          .classList.remove('active-link');
      }
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.addEventListener('scroll', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) { // Show button after 300px scroll
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });
  
  function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  } 
  
  function showGallery(category) {
    const galleryItems = document.getElementById('gallery-items');

    if (category === 'kegiatan-organisasi') {
        galleryItems.innerHTML = `
            <div class="photo">
          <img src="assets/images/32c8a7e2-e17a-4dcf-9e52-28f1e545948c.jpg" alt="Foto 1">
        </div>
        <div class="photo">
          <img src="assets/images/Sosialisasi maba.jpg" alt="Foto 2">
        </div>
        <div class="photo">
          <img src="assets/images/IMG_2051.JPG" alt="Foto 3">
        </div>
        <div class="video full-width">
          <iframe src="https://www.youtube.com/embed/e1grRUYsMJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="photo">
          <img src="assets/images/Sosialisasi.JPG" alt="Foto 4">
        </div>
        <div class="photo">
          <img src="assets/images/Rapat Rutin.JPG" alt="Foto 5">
        </div>
        <div class="photo">
          <img src="assets/images/Smartcompe.jpg" alt="Foto 6">
        </div>
        <div class="fullscreen full-width">
          <video id="myVideo" controls width="100%">
            <source src="assets/images/Sosialisasi Dan Ronda.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        `;
    } else if (category === 'sertifikat') {
        galleryItems.innerHTML = `
            <div class="photo">
              <img src="assets/images/sertifikat1.jpg" alt="Sertifikat 1">
            </div>
            <div class="photo">
              <img src="assets/images/sertifikat2.jpg" alt="Sertifikat 2">
            </div>
            <div class="photo">
              <img src="assets/images/sertifikat3.jpg" alt="Sertifikat 3">
            </div>
          `;
    }
}
  // Memantau event scroll untuk memicu fungsi scrollActive dan update kelas link aktif
  window.addEventListener('scroll', scrollActive);
  