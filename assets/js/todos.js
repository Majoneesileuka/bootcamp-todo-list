// Check on/off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(200, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// Add new todos
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // grab new todo text and create new li to ul
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

// Toggle text input
$(".fa-plus-square").click(function() {
  $("input[type='text']").fadeToggle();
});