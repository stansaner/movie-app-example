/* Variables */

var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');

function noMatch() {
    cardWrapper.innerHTML = '<p class="no-search">No matches found</p>';
}

function displayMatches(matches) {
    cardWrapper.innerHTML = '';

    if (!matches.length) {
        noMatch();
    }

    for (var matchObj of matches) {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <div class="movie-card" style="background-image: var(--gradient), 
            url(${matchObj.movie_image});">
                <h3>${matchObj.title}</h3>
                <p>${matchObj.description}</p>
                <a href="${matchObj.imdb_link}" target="_blank">View more info here</a>
            </div>
            `);
                
    }

}

function fetchMovies(event) {
    var keyCode = event.keyCode;
    // turn your strings to lowercase to avoid case mismatch
    // and trim to remove leading and trailing spaces
    var searchText = searchInput.value.toLowerCase().trim(); 
    
    if (keyCode === 13 && searchText) {
        var matches = [];

        for (var movieObj of movieData) {
            // for exact match
            // if (movieObj.title.toLowerCase() === searchText) {
            // for partial match use includes method
            if (movieObj.title.toLowerCase().includes(searchText)) {
                // pushing a matching object into the array matches
                matches.push(movieObj);
            }
        }
        searchInput.value = '';
        displayMatches(matches);

     //   fetch('https://www.omdbiapi.com/?apikey=<yourkey>&t=jurassic park ').then(function (responseObj) {
            
     //        var dataPromise = responseObj.json();
     //       console.log(responseObj);
     //       console.log(data);

     //       dataPromise.then(function(data) {

     //       });
     //   });
        // fetch returns a "promise" object
    }
}

/* First things that need to run right away */

function init() {
    searchInput.addEventListener('keydown', fetchMovies);
}


init();




/*
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam nostrum dolor veniam sed autem. Quibusdam voluptatibus totam quam commodi eos iste suscipit odit nemo maiores nesciunt. Quaerat, sequi placeat.</p>
            <a href="#">View More Info Here</a>
        </div>
*/