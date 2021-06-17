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

  it ('says when the pet needs a walk and food', () => {
    const pet = new Pet('fido');

    pet.fitness = 2;
    pet.hunger = 6;
    pet.checkUp();

    expect(pet.checkUp()).toEqual(expect.stringContaining("I need a walk and I am hungry"));
    

  }); 

  it ('says if the pet is alive', () => {
    const pet = new Pet('fido');

    pet.fitness = -1
    pet.hunger = 11
    pet.age = 31

    expect(pet.isAlive).toBe(false);
  });

  it ('othrows an error if the pet is not alive', () => {
    const pet = new Pet('fido');

    pet.fitness = -1
    pet.hunger = 11
    pet.age = 31


    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');

  

});

it ('Adopts a child into an array', () => {
  const pet = new Pet('fido');
  const Amelia = new Pet('Amelia');

  pet.adoptChild(Amelia);

  expect(pet.children).toContain(Amelia);
});


})