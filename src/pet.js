function Pet(petname) {
    this.name = petname;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;


}

Pet.prototype.growUp = function growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

const MaxFitness = 10

Pet.prototype.walk = function walk() {
    this.fitness += 4;
    if (this.fitness > MaxFitness) {
        this.fitness = MaxFitness;
    }
};

const MinHunger = 0

Pet.prototype.feed = function feed () {
    this.hunger -= 3;
    if (this.hunger < MinHunger) {
        this.hunger = MinHunger;
    }
}


module.exports = Pet;

