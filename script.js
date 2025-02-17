const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel about the American Dream.",
    cover: "https://i.pinimg.com/736x/d9/e1/65/d9e1658b173b0b7a8369830acee01cbc.jpg",
    file: "books/the-great-gatsby.pdf",
    genres: ["Fiction", "Classic", "Literary"]
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism.",
    cover: "https://i.pinimg.com/736x/17/fb/e1/17fbe1b3096863d5af032ce42c80c79c.jpg",
    file: "books/1984.pdf",
    genres: ["Fiction", "Dystopian", "Political"]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story of racial injustice in the American South.",
    cover: "https://i.pinimg.com/736x/22/6a/82/226a8218d7ce8c30743a0585ff4b8155.jpg",
    file: "books/Harper Lee - To Kill a Mockingbird (1988)_0.pdf",
    genres: ["Fiction", "Classic", "Historical", "Social Issues"]
  },

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A tale of love, class, and misunderstandings in Regency-era England.",
    cover: "https://i.pinimg.com/736x/4a/bb/2b/4abb2b116e0736c4a57d1b0dd5b59833.jpg",
    file: "books/Pride and Prejudice.pdf",
    genres: ["Fiction", "Classic", "Romance"]
  },

  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones",
    cover: "https://i.pinimg.com/736x/8c/50/9a/8c509a91adca718140857ef57730f1d9.jpg",
    file: "books/Atomic Habits (James Clear) .pdf",
    genres: ["Non-fiction", "Self-Help", "Personal Development"]
  },

  {
    title: "Until the End of Time",
    author: "Brian Greene",
    description: "A fascinating exploration of the nature of time, the universe, and humanity’s place within it, blending physics, philosophy, and storytelling to examine our search for meaning in an ever-evolving cosmos.",
    cover: "https://m.media-amazon.com/images/I/91-FLzVWDAL._AC_UF1000,1000_QL80_.jpg",
    file: "books/until-the-end-of-time-mind-matter-and-our-search-for-meaning-in-an-evolving-universe-1524731676-9781524731670-9781524731687.pdf",
    genres: ["Non-fiction", "Science", "Philosophy", "Cosmology"]
  },

  {
    title: "Newton's Principia",
    author: "Sir Isaac Newton",
    description: "A groundbreaking work in physics and mathematics, Philosophiae Naturalis Principia Mathematica lays the foundation for classical mechanics, introducing Newton's laws of motion and universal gravitation.",
    cover: "https://m.media-amazon.com/images/I/611aW5HyOEL._AC_UF1000,1000_QL80_.jpg",
    file: "books/Isaac-Newton-Principia-English-1846.pdf",
    genres: ["Non-fiction", "Science", "Mathematics", "Physics"]
  },
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk, M.D.",
    description: "An exploration of how trauma affects the body and mind, and paths to healing.",
    cover: "https://i.pinimg.com/736x/0e/a0/46/0ea046a2ae0aac2fb2a1f0a8ffde834f.jpg",
    file: "books/The-Body-Keeps-the-Score-PDF.pdf",
    genres: ["Non-fiction", "Psychology", "Mental Health"]
  },

  {
    title: "365 Days with Self-Dicipline",
    author: "Martin Meadows",
    description: "365 life-altering thoughts on self-control, mental resilience, and success",
    cover: "https://i.pinimg.com/736x/b3/fc/88/b3fc880daf255097a8140fcdd19014b0.jpg",
    file: "books/365 Days with Self-Discipline (Martin Meadows).pdf",
    genres: ["Non-fiction", "Self-Help", "Personal Development"]
  },

  {
    title: "Calm",
    author: "The School of Life",
    description: "Educate yourself in the art of remaining calm, and learn how",
    cover: "https://www.veronicacollignon.com/wp-content/uploads/2020/11/veronica-collignon-calm-book-cover.jpg",
    file: "books/Calm_Educate_yourself_in_the_art_of_remaining_calm,_and_learn_how.pdf",
    genres: ["Non-fiction", "Self-Help", "Mindfulness", "Wellness"]
  },

  {
    title: "The Three Mistakes of My Life",
    author: "Chetan Bhagat",
    description: "A story about business, cricket and religion",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1216107646i/3320520.jpg",
    file: "books/Chetan Bhagat -three mistakes of my life.pdf",
    genres: ["Fiction", "Contemporary", "Drama"]
  },

  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    description: "A powerful romance about love, resilience, and breaking cycles of abuse.",
    cover: "https://i.pinimg.com/736x/2e/fc/66/2efc66ea9b7a3389e6849793a4769125.jpg",
    file: "books/It Ends with Us (Colleen Hoover).pdf",
    genres: ["Fiction", "Romance", "Contemporary", "Drama"]
  },

  {
    title: "Reminders of Him",
    author: "Colleen Hoover",
    description: "A heartfelt story of redemption, forgiveness, and second chances.",
    cover: "https://i.pinimg.com/736x/3e/1c/ba/3e1cba863ad0dd7c397c7b2c0bcf6175.jpg",
    file: "books/Reminders of Him (Colleen Hoover).pdf",
    genres: ["Fiction", "Romance", "Contemporary", "Drama"]
  },

  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    description: "An intense romance about love, loss, and emotional healing.",
    cover: "https://i.pinimg.com/736x/ac/17/72/ac17727900746f5ac87bd05edb1414d7.jpg",
    file: "books/Ugly Love (Colleen Hoover).pdf",
    genres: ["Fiction", "Romance", "Contemporary", "New Adult"]
  },

  {
    title: "It's not How Good You Are, It's How good You Want to be",
    author: "Paul Arden",
    description: "A motivational guide to unlocking creativity and achieving success.",
    cover: "https://i.pinimg.com/736x/4c/8f/43/4c8f4316fe0293d2a034a9799e3748f8.jpg",
    file: "books/It’s_Not_How_Good_You_Are,_It’s_How_Good_You_Want_to_Be_The_world’s.pdf",
    genres: ["Non-fiction", "Self-Help", "Business", "Creativity"]
  },

  {
    title: "5 AM Club",
    author: "Robin Sharma",
    description: "A transformative guide to maximizing productivity and success by mastering your mornings.",
    cover: "https://i.pinimg.com/736x/c5/a6/4b/c5a64b433d1e3617d26f8c997a5ac263.jpg",
    file: "books/The 5 AM Club_ Own Your Morning. Elevate Your Life.pdf",
    genres: ["Non-fiction", "Self-Help", "Productivity", "Motivation"]
  },

  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A mystical journey of self-discovery, fate, and the pursuit of one's true purpose.",
    cover: "https://i.pinimg.com/736x/61/b6/29/61b6294cb679c0bf94a348ae6be67f5b.jpg",
    file: "books/The Alchemist.pdf",
    genres: ["Fiction", "Fantasy", "Philosophical", "Adventure"]
  },

  {
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    description: "An insightful exploration of human behavior and the psychology behind social interactions.",
    cover: "https://i.pinimg.com/736x/51/6d/d9/516dd93aa788cafe47080e149a55f18f.jpg",
    file: "books/The Laws of Human Nature (Robert Greene).pdf",
    genres: ["Non-fiction", "Psychology", "Self-Help", "Social Behavior"]
  },

  {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    description: "A fable about fulfilling your dreams and reaching your destiny",
    cover: "https://m.media-amazon.com/images/I/61v9Dr-6nbL._AC_UF1000,1000_QL80_.jpg",
    file: "books/The Monk Who Sold His Ferrari ( PDFDrive.com ).pdf",
    genres: ["Fiction", "Self-Help", "Spirituality", "Personal Growth"]
  },

  {
    title: "The Art of Public Speaking",
    author: "Dale Carnegie",
    description: "The original tool for improving public oration",
    cover: "https://i.pinimg.com/736x/90/30/b1/9030b1384455dc897f28318e2399b7a9.jpg",
    file: "books/The_Art_of_Public_Speaking_The_Original_Tool_for_Improving_Public.pdf",
    genres: []
  },

  {
    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    description: "A deep dive into the two systems of thinking that shape our decisions and judgments.",
    cover: "https://i.pinimg.com/736x/59/13/b3/5913b3449e4cbd0a077fbc99181b3393.jpg",
    file: "books/Thinking, Fast and Slow by Daniel Kahneman.pdf",
    genres: []
  },

  {
    title: "Word Power Made Easy",
    author: "Norman Lewis",
    description: "A comprehensive vocabulary-building guide to improve language skills and communication.",
    cover: "https://m.media-amazon.com/images/I/614-qjCBE4L.jpg",
    file: "books/Thinking, Fast and Slow by Daniel Kahneman.pdf",
    genres: []
  }
];

function collectGenres(books){
  const genresSet = new Set();

  books.forEach(book => {
    book.genres.forEach(genre =>{
      genresSet.add(genre);
    });
  });

  return Array.from(genresSet);
}

function createGenresDiv(){
  const genres = collectGenres(books);
    const sectionsDiv = document.getElementById("sections");

    genres.forEach(genre => {
        const section = document.createElement("button");
        section.innerText = genre;
        section.classList.add("section-btn");
        section.onclick = () => sectionPage(genre, books); 

        sectionsDiv.appendChild(section);
    });
}

document.addEventListener("DOMContentLoaded", createGenresDiv);

function sectionPage(genre, books) {
  const sectionBooks = books.filter(book => book.genres.includes(genre));
  
  localStorage.setItem("filteredBooks", JSON.stringify(sectionBooks));

  window.location.href = "sectionPage.html";
}


document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("sectionPage.html")) {
    const storedBooks = JSON.parse(localStorage.getItem("filteredBooks"));
    if (storedBooks) {
      displayBooks(storedBooks);
    }
  }
});

function displayBooks(Books) {
  const bookGrid = document.getElementById("bookGrid");

  const backBtn = document.querySelector(".back-btn")
  if (backBtn){
    backBtn.remove();
  }
  bookGrid.innerHTML = "";

  Books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const readButton = document.createElement("button");
    readButton.innerText = "Read PDF";
    readButton.classList.add("read-btn");
    readButton.onclick = () => Read(book.file);

    bookCard.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>By ${book.author}</p>
      <p>${book.description}</p>
    `;

    bookCard.appendChild(readButton);
    bookGrid.appendChild(bookCard);
  });
}


function filterBooks() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
}

function Read(book) {
  if (!book) {
    console.error("Error: No book file provided!");
    return;
  }

  const bookDiv = document.getElementById("bookGrid");
  const mainContainer = document.querySelector("main");

  bookDiv.innerHTML = "";

  const embed = document.createElement("embed");
  embed.src = book;
  embed.type = "application/pdf";
  embed.width = "100%";
  embed.height = "900px";

  const backButton = document.createElement("button");
  backButton.innerText = "⬅ Back to Library";
  backButton.classList.add("back-btn");

  backButton.onclick = () => {
    const storedBooks = JSON.parse(localStorage.getItem("filteredBooks"));
    if (storedBooks) {
      displayBooks(storedBooks);
    }
  };

  bookDiv.appendChild(embed);
  mainContainer.insertBefore(backButton, bookDiv);
}

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const pageContent = document.getElementById("pageContent");
  navMenu.classList.toggle("active");
  pageContent.classList.toggle("active");
}
