// ========================================================================
// Globals
// ========================================================================

var images = document.getElementById("images-wrapper").getElementsByTagName("img");
var lightbox = document.getElementById("lightbox");
var lightboxWrapper = document.getElementById("lightbox-img-wrapper");

// ========================================================================
// Event listeners
// ========================================================================

for (var i = 0; i < images.length; ++i) {
    images[i].addEventListener("click", function(event) {
        galleryImgOnClick(event.currentTarget);
        showLightbox();
    }), false;
}

// ========================================================================
// Event functions
// ========================================================================

function showLightbox() {
    lightbox.style.visibility = "visible";
    lightbox.style.opacity = "1";
    document.body.classList.add("stop-scrolling");
}

function closeLightbox() {
    lightbox.style.visibility = "hidden";
    lightbox.style.opacity = "0";
    document.body.classList.remove("stop-scrolling");
}
function galleryImgOnClick(instance) {
    var imagesrc = instance.src;
    lightboxWrapper.innerHTML = `<img src="${imagesrc}" alt="My city">`;
}