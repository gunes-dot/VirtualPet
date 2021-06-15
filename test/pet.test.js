const Pet = require('../src/pet');

const pet = {
  name: 'Fido'
};

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });

    it('increments the hunger by 5', () => {
      const pet = new Pet('Fido');

      pet.growUp();
      expect(pet.hunger).toEqual(5);

    });

    it ('fitness decreases by 3', () => {
      const pet = new Pet ('Fido');

      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });

    it('increases fitness by 4', () => {
      const pet = new Pet('fido');

      pet.fitness = 4;
      pet.walk ();

      expect(pet.fitness).toEqual(8);

    });

    it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);

  });

  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('fido');

    pet.hunger = 2;
    pet.feed();

    expect (pet.hunger).toEqual(0);
  });

  });
  



