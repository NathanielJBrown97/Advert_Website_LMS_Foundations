$(document).ready(function() {
    // Load HTML content
    $("#loadHtmlBtn").click(function() {
        clearContent(); // clear any existing content
        $("#htmlContent").load("../../data/tempContent.html");
    });

    // Load and process JSON data
    $("#loadJsonBtn").click(function() {
        clearContent(); // clear any existing content
        $.getJSON("../../data/tempContent.json", function(data) {
            var items = [];
            items.push("<h3>" + data.title + "</h3><p>" + data.description + "</p>");
            $.each(data.links, function(index, link) {
                items.push("<a href='" + link.href + "'>" + link.title + "</a><br>");
            });
            $("#jsonContent").html(items.join("")); 
        });
    });

    // Load HTML content with jQuery
    $("#loadJqueryContentBtn").click(function() {
        clearContent(); // clear any existing content
        $.ajax({
            url: "../../data/tempJqueryContent.html",
            success: function(result) {
                $("#jqueryContent").html(result); 
            }
        });
    });
});
