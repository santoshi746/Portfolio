function updateImageSrc() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    if (window.innerWidth >= 600) {
        img1.src = "img/photo1.jpeg"; 
        img2.src = "img/photo2.jpeg";// Path to your larger image
    } else {
        img1.src = "img/photo5.jpeg";
        img2.src = "img/photo4.jpeg"; // Path to your smaller image
    }
}

updateImageSrc();

window.addEventListener('resize', updateImageSrc);

