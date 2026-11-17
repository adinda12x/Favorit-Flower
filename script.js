const flowerTrigger = document.getElementById('flowerTrigger');
const birthdayCard = document.getElementById('birthdayCard');
const instruction = document.getElementById('instruction');
const sparkleBtn = document.getElementById('sparkleBtn');
const particlesContainer = document.getElementById('particles-container');

// Palet warna partikel cahaya (Putih Cahaya, Emas, Biru Muda)
const colors = ['#ffffff', '#fff0a8', '#e5c158', '#7cc4fa', '#bae1ff'];

// Membuat partikel cahaya mengambang otomatis
function createParticle(isBurst = false) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * (isBurst ? 7 : 5) + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * (isBurst ? 3 : 6) + 3;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}vw`;
    particle.style.background = color;
    particle.style.boxShadow = `0 0 ${size * 2.5}px ${color}, 0 0 ${size * 4}px #ffffff`;
    particle.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Jalankan partikel ambient terus-menerus
setInterval(() => createParticle(false), 300);

// Fungsi ledakan cahaya emas & putih
function burstLightParticles() {
    for (let i = 0; i < 45; i++) {
        setTimeout(() => createParticle(true), i * 35);
    }
}

// Interaksi saat bunga Lily of the Valley disentuh/diklik
flowerTrigger.addEventListener('click', () => {
    // 1. Bunga naik dan bersinar terang
    flowerTrigger.classList.add('bloomed');
    
    // 2. Sembunyikan teks instruksi
    instruction.style.opacity = '0';
    
    // 3. Ledakan cahaya partikel
    burstLightParticles();

    // 4. Tampilkan kartu ucapan berbingkai emas
    setTimeout(() => {
        birthdayCard.classList.add('show');
    }, 450);
});

// Tombol untuk menambah kilau cahaya lagi
sparkleBtn.addEventListener('click', () => {
    burstLightParticles();
});
