class CelestialObject {
    public readonly name: string;
    private _age: number;
    public constructor(traits: { name?: string, age?: number }) {
        this.name = traits.name || "Nameless celestial body";
        this._age = traits.age || 0;
    }

    public getSetAge(age?: number): string {
        if (arguments.length === 0) {
            return this.name + " is " + this._age + " years old.";
        }
        if (age > 0 && isFinite(age)) {
            this._age = age;
            return "Input for age was successful.";
        } else {
            return "Input for age was incorrect.";
        }
    }

    public pull(): string {
        return this.name + " pulls objects towards it.";
    }
}

class Stella extends CelestialObject {
    public readonly stellarClass: string;
    public constructor(traits: { name?: string, age?: number, stellarClass?: string }) {
        super(traits);
        this.stellarClass = traits.stellarClass || "M";
    }

    public pull(): string {
        return super.pull() + " And burns them.";
    }
}