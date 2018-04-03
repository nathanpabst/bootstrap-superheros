const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const buildDomString = (superHeroesArray) => {
    let domString = "";
    superHeroesArray.forEach((superhero) => {
        domString += `<div id="superhero-card">`;
        domString +=   `<h3>${superheroes.name}</h3>`;
        domString += `</div>`
    });           
    printToDom(domString, "superheroes");
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
    myRequest.open("GET", "./db/superheroes.json");
    myRequest.send();
};

startApplication();