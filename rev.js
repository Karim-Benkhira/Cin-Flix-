const movies = [
      { id: 1, title: "Inception", image: "./images/movies/bat-man.jpg" },
    { id: 2, title: "The Shawshank Redemption", image: "./images/movies/blood-shot.jpg" },
    { id: 3, title: "The Dark Knight", image: "./images/movies/call.jpg" },
    { id: 4, title: "Pulp Fiction", image: "./images/movies/captain-marvel.png" },
    { id: 5, title: "Forrest Gump", image: "./images/movies/hunter-killer.jpg" }
];
const favlist = JSON.parse(localStorage.getItem("favlist")) || [];

const movieList = document.getElementById('movie-list');
const reviewSection = document.getElementById('review-section');
const selectedMovie = document.getElementById('selected-movie');
const reviewForm = document.getElementById('review-form');
const starRating = document.getElementById('star-rating');
const reviewList = document.getElementById('review-list');

let currentMovie = null;
let currentRating = 0;
let array = {};


movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`
    movieCard.addEventListener('click', () => selectMovie(movie));
    movieList.appendChild(movieCard);
})


function selectMovie(movie) {
    currentMovie = movie;
    selectedMovie.innerHTML = `<h3>${movie.title}</h3><img src="${movie.image}" class="rev-img" alt="${movie.title}">`;
    reviewSection.classList.remove('hidden');
    reviewSection.scrollIntoView({ behavior: 'smooth' });
    array = movie;
}

starRating.addEventListener('click', (event) => {
  if(event.target.classList.contains('star')) {
    const rating = parseInt(event.target.dataset.rating, 10);
    currentRating = rating;
    updateStartRating();
  }
});

function updateStartRating() {
   const stars = starRating.getElementsByClassName('star');
   for(let i = 0; i < stars.length; i++) {
    stars[i].classList.toggle('active', i < currentRating);
   }
}


reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const reviewerName = document.getElementById('reviewer-name').value;
  const reviewText = document.getElementById('review-text').value;

  if(currentMovie && reviewerName && reviewText && currentRating > 0) { 
    addReview(currentMovie, reviewerName, reviewText, currentRating);
    reviewForm.reset();
    currentRating = 0;
    updateStartRating();
  }
});

function addReview(movie, reviewerName, reviewText, rating) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
        <h3 class="fff">${movie.title}</h3>
        <p><strong class="fff">Reviewer :</strong> <span class="fff"> ${reviewerName}</span></p>
        <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
        <p class="fff">${reviewText}</p>
    `;
    reviewList.prepend(reviewCard);
}

const favbtn = document.getElementById("add-fav");

favbtn.addEventListener("click", () => {
  const exists = favlist.some(favMovie => favMovie.id === currentMovie.id);
  if (!exists){
    favlist.push(array)
    localStorage.setItem("favlist", JSON.stringify(favlist));
  }
})