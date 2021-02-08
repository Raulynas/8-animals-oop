import { Bird } from "./Bird.js";

class Chicken extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.canFly = false;
    }
}

export { Chicken };
