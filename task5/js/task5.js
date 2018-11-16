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
