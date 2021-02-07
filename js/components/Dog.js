class Dog {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.furColor = kailis || "yellow";
        this.sound = "au au 🐕‍🦺🐕‍🦺";
        this.isStanding = false;
        this.distance = 0;
    }

    speak() {
        console.log(`${this.furColor} ${this.name} says: ${this.sound}`);
    }
    introduce() {
        console.log(
            `Hi, my name is ${this.name}, my fur is ${this.furColor} and I speak liks this: ${this.sound}`
        );
    }
    standUp() {
        this.isStanding = true;
    }
    sitDown() {
        this.isStanding = false;
    }
    walk(distance) {
        if (!this.isStanding) {
            console.log(`${this.name} cannot walk...dog needs to stand up`);
            return false;
        }
        this.distance += distance;
    }
}

export { Dog };
