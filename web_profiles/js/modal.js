// Event Listener; pop up modal upon loading homepage.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("myModal").style.display = "block";

    document.getElementsByClassName("close")[0].onclick = function() {
        document.getElementById("myModal").style.display = "none";
    };
});
