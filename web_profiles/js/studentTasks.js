$(document).ready(function() {
    $(".task-header").on("click", function() {
        $(this).next(".task-detail").slideToggle("slow", function() {
        });
    });
});
