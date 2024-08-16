// Get the modal
var modal = document.getElementById("popup-modal");

// Get all the links that open the modal
var linkE2 = document.querySelector('.box[href="www.e2.com"]');
var linkE5 = document.querySelector('.box[href="www.e5.com"]');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image element inside the modal
var modalImage = document.querySelector(".modal-content img");

// Function to open the modal with the correct image
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

// Event listeners for the links
linkE2.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723839180/Images/txjp6eo3wcqgizosbjen.png");
}

linkE5.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723755040/Images/pi8do8yfhi6outzi9w2f.png");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
