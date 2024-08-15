function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

var modal = document.getElementById("popup-modal");

var link = document.querySelector('.box[href="www.e5.com"]');

var span = document.getElementsByClassName("close")[0];

link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
