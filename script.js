let modal = document.getElementById("popup-modal");

let linkE2 = document.querySelector('.box[href="www.e2.com"]');
let linkE3 = document.querySelector('.box[href="www.e3.com"]');
let linkE5 = document.querySelector('.box[href="www.e5.com"]');

let span = document.getElementsByClassName("close")[0];
let modalImage = document.getElementById("modal-image");
let modalPDF = document.getElementById("modal-pdf");

function openModal(contentSrc, type) {
    modalImage.style.display = "none";
    modalPDF.style.display = "none";

    if (type === "image") {
        modalImage.src = contentSrc;
        modalImage.style.display = "block";
    } else if (type === "pdf") {
        modalPDF.src = contentSrc;
        modalPDF.style.display = "block";
    }
    modal.style.display = "block";
}


linkE2.onclick = function(event) {
    event.preventDefault(); 
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723839180/Images/txjp6eo3wcqgizosbjen.png", "image");
}

linkE3.onclick = function(event) {
    event.preventDefault(); 
    window.location.href = "https://res-console.cloudinary.com/dftxzx2zc/media_explorer_thumbnails/5159f1d7e6fbd0204781a265edf67b9e/download";
};
linkE5.onclick = function(event) {
    event.preventDefault(); 
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723755040/Images/pi8do8yfhi6outzi9w2f.png", "image");
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
