class Animal {
  constructor(spieces, name, country, color, imgUrl) {
    this.spieces = spieces;
    this.name = name;
    this.country = country;
    this.color = color;
  }
}

const animalOne = new Animal(
  "kattedyr",
  "løve",
  "africa",
  "yellow",
  "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg"
);

console.log(animalOne.name);

const animalTwo = new Animal(
  "fugl",
  "måke",
  "norge",
  "hvit og grå",
  "https://cdn.pixabay.com/photo/2018/02/16/22/08/bird-3158784_960_720.jpg"
);
