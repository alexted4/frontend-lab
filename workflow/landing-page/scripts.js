const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

const search = document.getElementById('search');
const searchOverlay = document.getElementById('searchOverlay');
const searchOverlayClose = document.getElementById('searchOverlayClose');

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

search.addEventListener('click', () =>{
    searchOverlay.style.display = "block";
});

searchOverlayClose.addEventListener('click', () => {
    searchOverlay.style.display = "none";
});