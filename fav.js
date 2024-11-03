const favlist = JSON.parse(localStorage.getItem("favlist")) || [];

const movieList = document.getElementById('movie-list');

favlist.forEach(favelem => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `<img src="${favelem.image}" alt="${favelem.title}">`
    movieCard.addEventListener('click', () => selectMovie(favelem));
    movieList.appendChild(movieCard);
})

// localStorage.clear();
function clearFav(){
    let clear = document.getElementById('dark-mode-toggle');
    let movieCard = document.querySelectorAll(".movie-card");
clear.addEventListener('click' , ()=>{
    localStorage.clear();
    movieCard.forEach(ele =>{
        ele.remove();
    })
}
)
}
clearFav()