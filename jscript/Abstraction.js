function Animal(){
    this.AnimalName = "AnimalName";
    throw new Error("You cannot create an instance of an abstract class nonsense fellow");
}

Animal.prototype.details = function(){
    return this.AnimalName;
}

var animal = new Animal();