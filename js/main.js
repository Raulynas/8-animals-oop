import { Dog } from "./components/Dog.js";
import { Cat } from "./components/Cat.js";
import { Hamster } from "./components/Hamster.js";
import { Chicken } from "./components/Chicken.js";
import { Parrot } from "./components/Parrot.js";
import { Eagle } from "./components/Eagle.js";
import { Dragonfly } from "./components/Dragonfly.js";
import { Goldfish } from "./components/Goldfish.js";
import { Nemo } from "./components/Nemo.js";

const dog = new Dog("Rex", "brown", "au au 🐕‍🦺🐕‍🦺");
const cat = new Cat("KitCat", "white", "Miau miau 🐈🐈");
const hamster = new Hamster("Ham", "black", "scratch scratch 🐹");
const chicken = new Chicken("Peak", "yellow", "ko ko 🐔");
const parrot = new Parrot("Po", "green and yellow", "ko ko 🦜");
const eagle = new Eagle("Mighty-Eagle", "black and white", "eeee");
const dragonfly = new Dragonfly("Dragy", "brown", "bzzz");
const goldfish = new Goldfish("Goldy", "gold", "pop");
const nemo = new Nemo("Nemo", "blue & yellow", "pop");

dog.voice();
dog.introduce();

cat.voice();
cat.introduce();

hamster.voice();
hamster.introduce();
console.log(hamster.canEatTillDeath);

// chicken.voice();
// chicken.introduce();
// chicken.flyAway();

// parrot.voice();
// parrot.introduce();
// parrot.flyAway();

// eagle.voice();
// eagle.introduce();
// eagle.flyAway();

// dragonfly.voice();
// dragonfly.introduce();
// console.log(dragonfly.imposter);
// dragonfly.flyAway();

// goldfish.voice();
// goldfish.introduce();
// goldfish.swimAway();
// goldfish.makeWish();

// nemo.voice();
// nemo.introduce();
// nemo.swimAway();
// nemo.makeWish();
