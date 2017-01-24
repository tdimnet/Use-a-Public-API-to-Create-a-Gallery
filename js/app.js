$(document).ready(function() {
  $('.OMDbForm').submit(function(event) {
    // Stop the form from submitting
    event.preventDefault();

    // Get The value from the form
    var OMDbAPI = 'http://www.omdbapi.com/?';
    var movie = $('.OMDbSearch').val();
    var OMDbOptions = {
      s: movie,
      r: 'json',
    };
    function displayMovies(data) {
      var moviesHTML = '<ul>';
      $.each(data.Search, function(index, value) {
        moviesHTML += '<li>';
        moviesHTML += '<a href="' + value.Title + '">';
        moviesHTML += value.Title;
        moviesHTML += '</a>';
        moviesHTML += '</li>';
      });//end each
      moviesHTML += '</ul>';
      $('#movies').prepend(moviesHTML);
      console.log(moviesHTML);
    }
    $.getJSON(OMDbAPI, OMDbOptions, displayMovies);// end getJSON
  }); // end submit function
}); // end document.ready



// console.log(value.Title);
// console.log(value.Year);
// console.log(value.imdbID);
// console.log(value.Type);
// console.log(value.Poster);
