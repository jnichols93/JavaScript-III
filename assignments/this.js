/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding:
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1 window/global binding

// code example for Window Binding
function sayWhatsUp(name){
    console.log(this);
    return`whats up ${name}`;
}
console.log(sayWhatsUp("Justin"));
// Principle 2
// code example for Implicit Binding
const myDog={
    name: `Coco`,
    saysSound: function(animalSound){
        console.log(`${this.name} says ${animalSound}`);
        console.log(this);
    }

};
myDog.saysSound('Boof');


// Principle 3

// code example for New Binding
function GoodDogs(dog){
    this.greeting = 'BARK';
    this.dog = dog;
    this.bark = function(){
        console.log(`${this.greeting} ${this.dog}` );
        console.log(this);
    }
}
const Tater = new GoodDogs ('Harley');
const Harley = new GoodDogs ('Tater');
Harley.bark();
Tater.bark();

// Principle 4

// code example for Explicit Binding

Harley.bark.call(Tater);Tater.bark.apply(Harley);