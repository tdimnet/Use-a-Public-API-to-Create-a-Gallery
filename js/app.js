  // Retrieve information from OMDb
// We create an empty array and store the variables inside of it.
var url = [
  'http://www.omdbapi.com/?t=Star+Wars&y=&plot=short&r=json',
  'http://www.omdbapi.com/?t=Star+Trek&y=2016&plot=short&r=json',
  'http://www.omdbapi.com/?t=StarGate&y=&plot=short&r=json',
  'http://www.omdbapi.com/?t=Star&y=&plot=full&r=json',
  'http://www.omdbapi.com/?t=The+star&y=&plot=full&r=json',
  'http://www.omdbapi.com/?t=The+star+Chamber&y=&plot=full&r=json',
];


// We create a foreach loop in order to loop through the array.
for (var i = 0; i < url.length; i++) {
  console.log(url[i]);
}



// The Standard AJAX Request
  // Need to work on it to append the information to the page

var url1 = 'http://www.omdbapi.com/?t=Star+Wars&y=&plot=short&r=json';
$.ajax(url1, {
  complete: function (p_oXHR, p_sStatus) {
    oData = $.parseJSON(p_oXHR.responseText);
    console.log(oData);
  }
});
