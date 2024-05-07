/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
   You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPg()
    {
        console.log(`
        TITILE = ${this.title}
        STUDIO = ${this.studio}
        RATING = ${this.rating}`)
    }
}
const m1 = new Movie("Casino Royale", "Eon Productions", "PG-13");
const m2 = new Movie("Iron Man", "Xmas");
m1.getPg();
m2.getPg();


//CIRCE
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }
    getRadius()
    {
        return `${this.radius}`;
    }
    setRadius(rad)
    {
        this.radius = rad;
        return `${this.radius}`;
    }
    getColor()
    {
        return this.color;
    }
    setColor(col)
    {
        this.color = col;
        return this.color;
    }
    toString()
    {
        return (`Circle[radius = ${this.radius} color = ${this.color}]`);
    }
    getArea()
    {
        return (Math.PI * (this.radius * this.radius));
    }
    getCircumference()
    {
        return (2 * Math.PI * this.radius);
    }
}
var c1 = new Circle(1.0, "red");
console.log(c1.getRadius());
console.log(c1.setRadius(5.0));
console.log(c1.getColor());
console.log(c1.setColor("PINK"));
console.log(c1.toString());
console.log(c1.getArea());
console.log(c1.getCircumference());

//Write a “person” class to hold all the details.
class Person {
    constructor(name , age , gender , email , city)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.city = city;
    }
    getPerson() {
        console.log(`
        NAME : ${this.name}
        AGE : ${this.age}
        GENDER : ${this.gender}
        EMAIL : ${this.email}
        CITY : ${this.city}`);
    }
    setPerson(nam , a , gen , mail , native) {
        this.name = nam;
        this.age = a;
        this.gender = gen;
        this.email = mail;
        this.city = native;

        console.log(`
        NAME : ${this.name}
        AGE : ${this.age}
        GENDER : ${this.gender}
        EMAIL : ${this.email}
        CITY : ${this.city}`);
    }
}
var p = new Person("shine" , 22 , "female" , "abc@gmail.com" , "erode");
p.getPerson();
p.setPerson("shiny" , 19 , "male" , "xyz@gmail.com" , "chennai");


//write a class to calculate the Uber price

class UberPriceCalculator {
    constructor(distanceInKilometers , timeInMinutes) {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
      this.distanceInKilometers = distanceInKilometers;
      this.timeInMinutes = timeInMinutes;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
}
const calculator = new UberPriceCalculator(6.0 , 10);
  
const estimatedPriceINR = calculator.calculatePrice(6.0 , 10);
console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
  