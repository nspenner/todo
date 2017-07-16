// To-Do toggle functionality
$("ul").on("click", "li", function(event) {
    $(this).toggleClass("completed");
});

// To-Do delete functionality
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add to-do functionality
$("input[type='text']").keypress(function(event) {
    // Check for enter key
    if(event.which === 13) {
        // Extract text from field
        var todoText = $(this).val();
        // Reset field
        $(this).val("");
        // Create a new li
        $("ul").append("<li><span>X </span>" + todoText + "</li>")
    }
});