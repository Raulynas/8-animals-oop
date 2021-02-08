import { Goldfish } from "./Goldfish.js";

class Nemo extends Goldfish {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.grantsWishes = false;
    }
}

export { Nemo };
