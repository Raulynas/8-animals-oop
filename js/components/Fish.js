import { Animals } from "./Animals.js";

class Fish extends Animals {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.canSwim = true;
    }

    swimAway() {
        if (this.canSwim) {
            console.log(`By by 🐟...`);
        } else {
            console.log("I cannot swim 😢");
        }
    }
}

export { Fish };
