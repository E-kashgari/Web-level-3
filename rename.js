class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

let myCarFord = new Car("Ford", 2014);
let myCarAudi = new Car("Audi", 2019);
class Pen {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();