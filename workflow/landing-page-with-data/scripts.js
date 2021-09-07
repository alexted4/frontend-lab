// LANDING FUNCTIONALITY

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

// REQUEST TO GIPHY

const loading = document.getElementById('loading');
const cardsBlock = document.getElementById('cardsBlock');

// REQUIRED
const API_KEY = config.API_KEY;

// REQUIRED
let searchQuery = 'cats';
const searchQueryInput = document.getElementById('searchQueryInput');

// The maximum number of objects to return.
let limit = '10';
const limitInput = document.getElementById('limitInput');

// Specifies the starting position of the results.
let offset = 0;

function setLoading(to){
    if (to) {
        //loading is true
        loading.style.display = "flex";
        cardsBlock.style.display = "none";
    } else {
        //loading is false
        loading.style.display = "none";
        cardsBlock.style.display = "flex";
    }
}

//in some cases giphy returns no username
function resolveUsername(username){
    if (username === ""){
        return "";
    } else {
        return " by " + username;
    }
}

function buildQueryUrl(){
    let url = 'https://api.giphy.com/v1/gifs/search?q=' + searchQuery + 
    '&api_key=' + API_KEY + 
    '&limit=' + limit + 
    "&offset=" + offset
    return url
}

function buildCard(element){
    return (`
        <div class = "card">
            <div class = "image-container">
                <img src="` + element.images.original.url +`">
                <div class="image-overlay">
                    <a href ="`
                    + element.images.original.url +
                    `"><i class="fas fa-link fa-fw fa-sm"></i></a>
                </div>
            </img>
            </div>
            <h3><a href = "#">` + element.title + `</a></h3>
            <p class = "date">` 
            + element.import_datetime + resolveUsername(element.username) + 
            `</p>
            <p class = "text">Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Alias, deleniti, 
                id quibusdam aut optio saepe soluta tempore neque voluptatum.
            </p>
        </div>
    `)
}

function buildLayout(data){
    cardsBlock.innerHTML = "";
    for (let i = 0; i < data.length; i++){
        cardsBlock.innerHTML += buildCard(data[i]);
    }  
}

async function getGifs(){
    let url = buildQueryUrl()
    setLoading(true);
    
    fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        buildLayout(data.data);
        setLoading(false);
    }).catch(function (err) {
        console.warn("ERROR: " + err);
    });
}

getGifs()

// SEARCH CONTROLS FUNCTIONALITY

const searchSubmit = document.getElementById('searchSubmit');
searchSubmit.addEventListener("click", () => {
    if (searchQueryInput.value !== "") {
        searchQuery = searchQueryInput.value;   
    }
    if (limitInput.value !== "") {
        limit = limitInput.value;     
    }
    getGifs();
});


// pagination
const currentPage = document.getElementById('currentPage');

const nextPage = document.getElementById('nextPage');
nextPage.addEventListener("click", () => {
    offset = currentPage.value*limit;
    currentPage.value++;
    getGifs();
});

const prevPage = document.getElementById('prevPage');
prevPage.addEventListener("click", () => {
    if (currentPage.value - 1 > 0){
        offset = (currentPage.value - 1) * limit - limit;
        currentPage.value--;
        getGifs();
    }
});
