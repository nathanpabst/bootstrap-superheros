const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const buildDomString = (superHeroesArray) => {
    let domString = "";
    superHeroesArray.forEach((superhero) => {
        domString += `<li>`;
        domString += `<a href="#" data-hero-id="${superhero.id}">${superhero.name}</a>`;
        domString += `</li>`;
    });           
    printToDom(domString, "awesome-dropdown");
};

function executeThisCodeAfterFileLoaded (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
}

function WTF(){
    console.log('Oops! Something went wrong.');
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "/db/superheroes.json");
    myRequest.send();
};

startApplication();