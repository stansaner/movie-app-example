/* Variables */

var searchInput = $('.search');
var cardWrapper = $('main');

function noMatch() {
  cardWrapper.html('<p class="no-search">No results found.</p>');
}

function displayMatches(matches) {
  cardWrapper.html('');

  if (!matches) {
    noMatch();
  } else {
    for (var matchObj of matches) {
      cardWrapper.append(`
      <div class="movie-card" style="background-image: 
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url(${matchObj.Poster});">
        <h3>${matchObj.Title}</h3>
        <p>Release Year: ${matchObj.Year}</p>
        <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Info Here</a>
      </div>
      `);
    }
  }


}

function fetchMovies(event) {
  var keyCode = event.keyCode;
  // toLowerCase and trim() are javascript programming language 
  // functions that operate on strings. The val() method returns 
  // a string, so it will work
  // toLowerCase() isn't actually needed as val() is case insensitive
  var searchText = searchInput.val().toLowerCase().trim();

  // in jquery no argument passed gets
  // argument passed in sets

  if (keyCode === 13 && searchText) {

    // var responsePromise = fetch(`https://www.omdbapi.com/?apikey=6aea06d6&s=${searchText}`);
    $.get(`https://www.omdbapi.com/?apikey=6aea06d6&s=${searchText}`)
        .then(function (data) {
            displayMatches(data.Search);
            searchInput.val('');
        });

    // function handleResponse(responseObj) {
    //   return responseObj.json();
    // }

    // responsePromise
    //   .then(handleResponse)
    //   .then(function (data) {
        // displayMatches(data.Search);
        // searchInput.value = '';
    //   });


  }
}

function init() {
  searchInput.keydown(fetchMovies);
}

init();