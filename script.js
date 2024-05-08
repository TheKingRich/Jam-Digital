
  function updateTime() {
    const now = new Date();
  
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}, ${month} ${dayOfMonth}, ${year}`;
  
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
  }
  
  setInterval(updateTime, 1000);
    