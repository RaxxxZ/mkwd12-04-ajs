<<<<<<< Updated upstream
// Selected Elements
const html = {
    cardContainer: document.querySelector('#cardContainer'),
};

// Functions
function getCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => showCountries(countries));
}

function showCountries(countries) {
    countries.forEach(country => {
        html.cardContainer.innerHTML += createCard(country);
    });
}

function createCard(country) {
    return `
    <div class="column margin-bottom>
        <div class="info-card">
            <img src="${country.flags.png}"
                 alt="${country.flags.alt}"
                 class="info-image"
            />
            <div class="info-body">
                <h5 class="info-title">${country.name.common}</h5>
                <p class="info-text">${country.name.common} is a country with population of ${country.population}
                 and capital city is ${!!country.capital && !!country.capital.langth ? country.capital[0] : 'unknown'}.</p>
            </div>
            <div class="info-footer">
                <small class="text-muted">Open on <a href="#" />Wikipedia</a></small>
            </div>
        </div>
    </div>`;
}

// Init
getCountries();
=======
//selektiranje
const html = {
    cardContainer: document.querySelector('#cardContainer'),



}



//funkcija
 function GetCountrys(){
    fetch('https://restcountries.com/v3.1/all')
    .then(rasponse => rasponse.json())
    .then(countries => ShowCountries(countries));
 }

 //posebni console log za sekoa drzava
function ShowCountries(countries){
    countries.forEach(c => console.log(c));
    html.cardContainer.innerHTML  += createCard(countries);
}
//
function createCard(country) {
    return `
    <div class="colum margin-bottom>
    <div class="info-card">>
    <img src="${country.flags.png}" class="info-image" alt="${country.flags.alt}" />
    </div>
    </div>
    <div class="info-body"
    <h5 class="info-title">${country.name}<h5>
    <p class=" ">${country.name.common} is a country with population of${country.population}</p>
    capital cyty is ${country.capital[0]}.</>
    </div>
    <div class="info-foother">
    <small class="text-muted">open a <a href="http://>wikipedia</a>.</small>`
    

    
}


























>>>>>>> Stashed changes
