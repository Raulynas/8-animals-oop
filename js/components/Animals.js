import { Pet } from "./Pet.js";

class Animals {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    voice() {
        console.log(`Hi, I am ${this.name} and I say: ${this.sound}`);
    }
    introduce() {
        console.log(
            `Hi, my name is ${this.name}, my color is ${this.color} and I speak like this: ${this.sound}`
        );
    }
}

export { Animals };
