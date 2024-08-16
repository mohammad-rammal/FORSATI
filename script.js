let modal = document.getElementById("popup-modal");

let linkE1 = document.querySelector('.box[href="www.e1.com"]');
let linkE2 = document.querySelector('.box[href="www.e2.com"]');
let linkE3 = document.querySelector('.box[href="www.e3.com"]');
let linkE4 = document.querySelector('.box[href="www.e4.com"]');
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

linkE1.onclick = function(event) {
    event.preventDefault(); 
    window.location.href = "https://res.cloudinary.com/dftxzx2zc/raw/upload/v1723847798/Extra/How_to_excel_at_work.pptx";
};

linkE2.onclick = function(event) {
    event.preventDefault(); 
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723845580/Extra/kbtllozarauzdq57e6zs.png", "image");
}

linkE3.onclick = function(event) {
    event.preventDefault(); 
    window.location.href = "https://res.cloudinary.com/dftxzx2zc/raw/upload/v1723847279/Extra/summary.docx";
};

linkE4.onclick = function(event) {
    event.preventDefault(); 
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723845728/Extra/lnbf81nbmfeixs26qg49.png", "image");
}
linkE5.onclick = function(event) {
    event.preventDefault(); 
    openModal("https://res.cloudinary.com/dftxzx2zc/image/upload/v1723845337/Extra/dwxqyq7yzz6bgrz1afhz.png", "image");
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
