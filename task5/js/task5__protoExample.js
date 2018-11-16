function Animal(traits) {
    this.name = traits.name || "Nameless";
    this.age = traits.age || 0;
    this.gender = traits.gender || "male";
}
Animal.prototype.makeSound = function () {
    return this.name + " makes random sounds. ";
};

function Human(traits) {
    Animal.apply(this, [traits]);
    this.knownLanguages = ["English", "Russian", "German", "French", "Spanish", "Japanese"];
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;

Human.prototype.speak = function () {
    return this.name + " also speaks " + this.knownLanguages[Math.round(Math.random() * (this.knownLanguages.length - 1))] + ".";
};
Human.prototype.makeSound = function () {
    return Animal.prototype.makeSound.apply(this) + this.speak();
};
