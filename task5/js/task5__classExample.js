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
        return this.readIt() + " But you decide to listen to an audiobook version instead!";
    }
}
