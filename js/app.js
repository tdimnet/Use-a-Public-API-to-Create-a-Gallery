//$(document).ready(function() {
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
      moviesHTML += '<li class="img-' + index + '">';
      moviesHTML += '<img ';
      moviesHTML += 'src="' + value.Poster + '" ';
      moviesHTML += 'alt="' + value.Title + '" >';
      moviesHTML += '</li>';
    });//end each
    moviesHTML += '</ul>';
    $('#movies').html(moviesHTML);
  }
  $.getJSON(OMDbAPI, OMDbOptions, displayMovies);// end getJSON
}); // end submit function

// console.log(value.Title);
// console.log(value.Year);
// console.log(value.imdbID);
// console.log(value.Type);
// console.log(value.Poster);

//}); // end document.ready


// When a user click an Poster
  // Retrieve the information from this
