import { Animals } from "./Animals.js";

class Pet extends Animals {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

export { Pet };
