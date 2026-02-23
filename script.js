function updateClock() {
  const now = new Date();
  
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  
  // Ambil waktu
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Format Tanggal (Contoh: Senin, 23 Feb 2026)
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = now.toLocaleDateString('id-ID', options);
  
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = dateString;
}

// Jalankan segera dan update tiap detik
updateClock();
setInterval(updateClock, 1000);
