import { Pet } from "./Pet.js";

class Hamster extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.canEatTillDeath = `Yes, I can eat till I die 🐹`;
    }
}

export { Hamster };
