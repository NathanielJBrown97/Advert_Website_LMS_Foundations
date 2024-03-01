$(document).ready(function() {
    // Load HTML content
    $("#loadHtmlBtn").click(function() {
        $("#htmlContent").load("tempContent.html");
    });

    // Load and process JSON data
    $("#loadJsonBtn").click(function() {
        $.getJSON("tempContent.json", function(data) {
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
        $.ajax({
            url: "tempJqueryContent.html",
            success: function(result) {
                $("#jqueryContent").html(result); 
            }
        });
    });
});
