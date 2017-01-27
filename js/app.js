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


//
  // When an image is clicked, retrieve all the information needed with a new AJAX Request
//
$('#movies').on('click', 'img', function() {
  var image = $(this).attr('alt');
  console.log(image);
  var OMDbAPI = 'http://www.omdbapi.com/?';
  var movie = image;
  var OMDbOptions = {
    t: movie
  };
  function displayOneMovie(data) {
    console.log(data);
    console.log(data.Poster);
    $poster.attr('src', data.Poster);
    $poster.attr('alt', data.Title);
    $overlay.fadeIn('slow');
  }
  $.getJSON(OMDbAPI, OMDbOptions, displayOneMovie);
});



//
  // Creating the variables
//
var $overlay = $('<div id="overlay"></div>');
var $poster = $('<img>');
  // Adding element to the page
$('body').append($overlay);
$overlay.append($poster);


//
  // Creating the event handler
//


$overlay.click(function() {
  $(this).fadeOut('slow');
});
