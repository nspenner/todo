// To-Do toggle functionality
$("li").click(function(event) {
    $(this).toggleClass("completed");
});

// To-Do delete functionality
$("span").click(function() {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
});