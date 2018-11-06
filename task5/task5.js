function CelestialBeing(traits) {
    this.name = traits.name || "Nameless celestial body";
    this.age = traits.age || 0;

    this.getSetAge = function (age) {
        if (!arguments.length) return this.name + " is " + this.age + " years old.";

        if (age > 0 && isFinite(age)) {
            this.age = age;
        } else {
            alert("Input for the age is incorrect.");
        }
    }

    this.pull = function () {
        return this.name + " pulls objects towards it.";
    }
}

function Star(traits) {
    CelestialBeing.apply(this, [traits]);
    this.stellarClass = traits.stellarClass || "M";

    var parentPull = this.pull;
    this.pull = function () { // overriding
        return parentPull.call(this) + " And burns them.";
    }
}



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
Human.prototype.speak = function () {
    return this.name + " also speaks " + this.knownLanguages[Math.round(Math.random() * (this.knownLanguages.length - 1))] + ".";
};
Human.prototype.makeSound = function () {
    return Animal.prototype.makeSound.apply(this) + this.speak();
};



class Book {
    constructor(traits) {
        this.name = traits.name || "Nameless book";
        this.pages = traits.pages || 1;
    }

    readIt() {
        return "You are reading: " + this.name + ". It's " + this.pages + " pages long.";
    }
}

class Audiobook extends Book {
    listenToIt() {
        return super.readIt() + " But you decide to listen to an audiobook version instead!";
    }
}



var sun = new Star({
    name: "Sun",
    age: "4.603e9",
    stellarclass: "G"
});
document.write(sun.pull() + "<br>");
document.write(sun.getSetAge() + "<br>");

var adam = new Human({
    name: "Adam",
    age: "25",
    gender: "male"
});
document.write(adam.makeSound() + "<br>");

var dasKapital = new Audiobook({
    name: "Das Kapital",
    pages: "914",
});
document.write(dasKapital.listenToIt() + "<br>");