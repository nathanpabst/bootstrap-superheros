const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const buildDomString = (superHeroesArray) => {
    let domString = "";
    superHeroesArray.forEach((superhero) => {
        domString += `<div class="col-md-3">`;
        domString += `<div class="panel">`;
        domString += `<div class="panel-heading">`;
        domString += `<h3 class="panel-title">${superhero.name}</h3>`;
        domString += `</div>`;
        domString += `<div class="panel-body">`;
        if (superhero.gender === "Male"){
            domString += `<img class="maleCharImage" src="${superhero.image}">`;
        } else {
            domString += `<img class="femaleCharImage" src="${superhero.image}">`;
        }
        domString += `<p class="charDescription">${superhero.description}`;
        domString += `</div>`;
        domString += `</div>`;   
        domString += `</div>`;   
    });           
    printToDom(domString, "superhero-card");
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