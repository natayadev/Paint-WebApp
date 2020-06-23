$(document).ready(setColors);

function setColors() {
  var colors_array = ["brown", "red", "orange", "yellow", "green", "blue", "purple", "pink", "grey", "black"];

  for (var i = 0; i < colors_array.length; i++) {
    $('#changeColor').append('<button class="set-colors" id='+colors_array[i]+' style="background-color: '+colors_array[i]+'"></button>');
  }

  $('#changeColor button').click(function() {
    var selectedColor = $(this).attr('id');
    context.fillStyle = selectedColor;
    context.strokeStyle = selectedColor;
  });
}
