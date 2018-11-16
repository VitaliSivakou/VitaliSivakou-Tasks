function CelestialBody(traits) {
    this.name = traits.name || "Nameless celestial body";
    this.age = traits.age || 0;

    this.getSetAge = function (age) {
        if (!arguments.length) {
            return this.name + " is " + this.age + " years old.";
        }
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
    CelestialBody.apply(this, [traits]);
    this.stellarClass = traits.stellarClass || "M";

    var parentPull = this.pull;
    this.pull = function () {
        return parentPull.call(this) + " And burns them.";
    }
}
