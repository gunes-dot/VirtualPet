function Pet(petname) {
    this.name = petname;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}




Pet.prototype = {
    get isAlive () {
        if (this.fitness <=0 || this.hunger >= 10 || this.age >= 30) {
            return false;
        } else {
            return true;
        }
    }
}

Pet.prototype.adoptChild = function adoptChild (child) {
    this.children.push(child)
}




Pet.prototype.growUp = function growUp() {
    if (!this.isAlive) {
        throw ('Your pet is no longer alive :(');
    }
    
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;

   return
};

const MaxFitness = 10

Pet.prototype.walk = function walk() {

    if (!this.isAlive) {
        throw ('Your pet is no longer alive :(');
    }

    this.fitness += 4;
    if (this.fitness > MaxFitness) {
        this.fitness = MaxFitness;
}

};

const MinHunger = 0

Pet.prototype.feed = function feed() {
    if (!this.isAlive) {
        throw ('Your pet is no longer alive :(');
    }

    this.hunger -= 3;
    if (this.hunger < MinHunger) {
        this.hunger = MinHunger;
    }
};

Pet.prototype.checkUp = function checkUp() {

    if (!this.isAlive) {
        throw ('Your pet is no longer alive :(');
    }

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
