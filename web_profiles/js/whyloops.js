document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.getElementById('loopExample');

    let content = '<ul>';
    for (let i = 1; i <= 10; i++) {
        content += `<li>${i}</li>`; // Loop from 1 to 10 and create list items
    }
    content += '</ul>';

    targetElement.innerHTML = content; // replace content with list.
});
