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

Pet.prototype.feed = function feed() {
    this.hunger -= 3;
    if (this.hunger < MinHunger) {
        this.hunger = MinHunger;
    }
};

Pet.prototype.checkUp = function checkUp() {

    if (this.fitness <= 3 && this.hunger >= 5) {
        return "I need a walk and I am hungry";
    } else if (this.fitness > 3 && this.hunger < 5) {
        return "I feel great!";
    } else if (this.fitness <= 3) {
        return "I need a walk";
    } else if (this.hunger >= 5) {
        return "I am hungry";
    } else if (this.fitness > 3) {
        return "I feel great!";
    } else if (this.hunger < 5) {
        return "I feel great!";
    }
};




module.exports = Pet;

