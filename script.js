function updateTime() {
  const now = new Date();
  
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  
  // Time format
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Date format (Using Indonesian Locale if you want, or keep 'en-US')
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const month = now.toLocaleDateString('en-US', { month: 'short' });
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${day}, ${dayOfMonth} ${month} ${year}`;
}

// Run immediately and then interval
updateTime();
setInterval(updateTime, 1000);
