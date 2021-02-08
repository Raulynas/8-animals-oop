import { Animals } from "./Animals.js";

class Bird extends Animals {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.wingsCount = 2;
        this.canFly = true;
    }

    flyAway() {
        if (this.canFly) {
            console.log(`I have ${this.wingsCount} wings and I can fly...`);
        } else {
            console.log(
                `I have ${this.wingsCount} wings but I cannot fly... 😢`
            );
        }
    }
}

export { Bird };
