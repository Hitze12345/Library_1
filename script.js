document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const query = document.getElementById('searchInput').value;
  searchBooks(query);
});

function searchBooks(query) {
  fetch(`https://your-backend-url.onrender.com/search?query=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(books => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      books.forEach(book => {
        resultsDiv.innerHTML += `
          <div class="book-card">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <button onclick="getSummary('${book.title}')">Get Summary</button>
          </div>
        `;
      });
    });
}

function getSummary(title) {
  fetch(`https://your-backend-url.onrender.com/summary?title=${encodeURIComponent(title)}`)
    .then(res => res.json())
    .then(data => {
      alert(`Summary of ${data.title}:\nAuthor: ${data.author}\nYear: ${data.year}`);
    });
}
