document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    // Tambahkan listener untuk mendeteksi interaksi pengguna
    document.addEventListener('click', () => {
      backgroundMusic.muted = false; // Unmute musik saat interaksi pengguna
    });
  
    // Fade-out loading animation
    const loading = document.getElementById('loading');
    window.addEventListener('load', () => {
      loading.classList.add('fade-out');
      loading.addEventListener('transitionend', () => {
        loading.style.display = 'none';
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const interactPrompt = document.getElementById('interactPrompt');
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    // Tampilkan prompt
    interactPrompt.style.opacity = 1;
  
    // Fungsi untuk memulai musik
    const startMusic = () => {
      backgroundMusic.play().then(() => {
        backgroundMusic.muted = false; // Unmute musik
        interactPrompt.style.display = 'none'; // Sembunyikan prompt
        // Hapus event listener setelah musik dimulai
        document.removeEventListener('click', startMusic);
        document.removeEventListener('dragstart', startMusic);
      }).catch((error) => {
        alert('Gagal memutar musik: ' + error.message);
      });
    };
  
    // Dengarkan interaksi pengguna (klik atau drag pada elemen manapun)
    document.addEventListener('click', startMusic);
    
    // Untuk menangani drag pada elemen tertentu (misalnya .paper)
    const paperElements = document.querySelectorAll('.paper');
    paperElements.forEach((paper) => {
      paper.addEventListener('dragstart', startMusic);
    });
  });
   