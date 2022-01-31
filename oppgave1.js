// Dette er klassenavnet. classes lager en oppskrift eller template for hvordn hvert object skal se ut.
class Animal {
  //construkter blir kalt på automatisk og ansvarlig for å lage nye objekter
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
}
// Dette er ett objekt. Objektene vi lager som følger oppskriften til classene den tilhører.
let animalOne = new Animal(
  "Kattedyr",
  "Løve",
  "Africa",
  "Yellow",
  "<img src = https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg>"
);
// Dette er ett objekt
console.log(animalOne);

let animalTwo = new Animal(
  "fugl",
  "måke",
  "norge",
  "hvit og grå",
  "<img src = https://cdn.pixabay.com/photo/2018/02/16/22/08/bird-3158784_960_720.jpg>"
);

let speciesCardOne = document.getElementById("species-container");
let nameCardOne = document.getElementById("name-container");
let countryCardOne = document.getElementById("country-container");
let colorCardOne = document.getElementById("color-container");
let imgCardOne = document.getElementById("img-container");

speciesCardOne.innerHTML = "Art: " + animalOne.species;
nameCardOne.innerHTML = "Navn: " + animalOne.name;
countryCardOne.innerHTML = animalOne.color;
colorCardOne.innerHTML = animalOne.country;
imgCardOne.innerHTML = animalOne.imgUrl;

let speciesCardTwo = document.getElementById("species-container2");
let nameCardTwo = document.getElementById("name-container2");
let countryCardTwo = document.getElementById("country-container2");
let colorCardTwo = document.getElementById("color-container2");
let imgCardTwo = document.getElementById("img-container2");

speciesCardTwo.innerHTML = animalTwo.species;
nameCardTwo.innerHTML = animalTwo.name;
countryCardTwo.innerHTML = animalTwo.color;
colorCardTwo.innerHTML = animalTwo.country;
imgCardTwo.innerHTML = animalTwo.imgUrl;
