import { Fish } from "./Fish.js";

class Goldfish extends Fish {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.grantsWishes = true;
    }
    makeWish() {
        if (this.grantsWishes) {
            console.log("will be happy to help!");
        } else {
            console.log("I am not a goldfish");
        }
    }
}

export { Goldfish };
