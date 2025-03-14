// Example of toggling the status
const statusDiv = document.querySelector('.status');

function setStatus(isAvailable) {
  if (isAvailable) {
    statusDiv.classList.remove('unavailable');
    statusDiv.classList.add('available');
    statusDiv.querySelector('.dot').style.backgroundColor = 'green';
    statusDiv.style.color = 'green';
    statusDiv.innerHTML = '<div class="dot"></div> Available';
  } else {
    statusDiv.classList.remove('available');
    statusDiv.classList.add('unavailable');
    statusDiv.querySelector('.dot').style.backgroundColor = 'red';
    statusDiv.style.color = 'red';
    statusDiv.innerHTML = '<div class="dot"></div> Unavailable';
  }
}

// Example usage:
setStatus(true);  // Book is available
// setStatus(false); // Book is unavailable

document.querySelector('.back-btn').addEventListener('click', () => {
    document.getElementById('bookDetail').style.display = 'none';
  });

  window.history.back();

  const backBtn = document.querySelector('.back-btn');
  const bookDetail = document.getElementById('bookDetail');
  const bookCard = document.querySelector('.book-card');
  
  backBtn.addEventListener('click', () => {
    // Start slide out animation
    bookCard.style.animation = 'slideOut 0.3s ease forwards';
    bookDetail.style.animation = 'fadeOut 0.3s ease forwards';
  
    // Remove the modal after the animation finishes
    setTimeout(() => {
      bookDetail.style.display = 'none';
    }, 300); // Matches the animation duration
  });
  

  document.querySelector('.request-btn').addEventListener('click', async () => {
    const bookTitle = document.querySelector('.book-card h2').textContent;
    const userName = 'User123'; // Optional: get this from your auth/user data
  
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookTitle, userName })
      });
  
      const data = await res.json();
  
      if (data.success) {
        alert('Request sent to admin!');
      } else {
        alert('Failed to send request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  });
  