$(function() {

  $('.latest-games').on('click', '.glyphicon-trash', function removeGame() {
    var input = confirm("Are you sure you want this game removed?");
    if (input === true) {
      $(this).parent('.game').remove();
    } else {
      return;
    }
  });

