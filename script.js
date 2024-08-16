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
// Get the PDF modal
var pdfModal = document.getElementById("pdf-modal");

// Get the <span> element that closes the PDF modal
var spanPdf = document.getElementsByClassName("close-pdf")[0];

// Get the iframe inside the PDF modal
var pdfFrame = document.getElementById("pdf-frame");

// Event listener for the Summary Report link to open the PDF in a modal
linkE3.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    pdfFrame.src = "https://res.cloudinary.com/dftxzx2zc/image/upload/v1723839583/Images/bpt1vswehfbbheea1p0r.pdf";
    pdfModal.style.display = "block";
}

// When the user clicks on <span> (x), close the PDF modal
spanPdf.onclick = function() {
    pdfModal.style.display = "none";
    pdfFrame.src = ""; // Clear the PDF source when closing
}

// When the user clicks anywhere outside of the PDF modal, close it
window.onclick = function(event) {
    if (event.target == pdfModal) {
        pdfModal.style.display = "none";
        pdfFrame.src = ""; // Clear the PDF source when closing
    }
}
