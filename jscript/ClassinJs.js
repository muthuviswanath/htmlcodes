class Helmet{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    // Method
    getDetails(){
        return `Name: ${this.name}, Color: ${this.color}, Price: ${this.price}`;
    }

    static getHelmet(){
        return "Helmet class static method";
    }
}
helmet = new Helmet("Studds", "Black", 1500);
console.log(helmet.name);
console.log(helmet.color);
console.log(helmet.price);
var details = helmet.getDetails();
console.log(details);
console.log(Helmet.getHelmet());