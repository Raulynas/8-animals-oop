import { Bird } from "./Bird.js";

class Dragonfly extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.wingsCount = 4;

        this.imposter = true;
    }
}

export { Dragonfly };
