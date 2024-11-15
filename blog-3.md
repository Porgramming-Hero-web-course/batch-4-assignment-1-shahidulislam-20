Why are Type Guard Necessary?
- In TypeScript, type guard are essential tools that help developers work with different types of data safely.
- They make the code more predictable, reduce errors and improve readability.

Discuss various types of type guards and their use cases.
01) (typeof) Type Guard -
This is the simplest type guard. It checks the type of a vaiable like string, number or Boolean.

Example : --------------------------
const printValue => (value : string | number) => {
	if(typeof value === 'string'){
	console.log(value.toUppercase())
    }else if(typeof value === 'number'){
        console.log(value*value)
    }
-------------------------------------
Use Case : Use typeof when you are dealing with basic data type like string, number or boolean.

02) (instanceof) Type Guard -
This checks if an object is an instance of a specific class.
Example :  --------------------------
class Dog {
    bark(){console.log('ghew')}
}
class Cat {
    meaw(){console.log('meaw')}
}
const animalSound = (animal : Dog | Cat) => {
    if(animal instanceof Dog){animal.bark()}
    else{animal.meaw()}
}
-------------------------------------
Use Case : Use instanceof when working with objects created from classes.

03) (in) Operator -
This checks if a property exists on an object.
Example : --------------------------
interface Car {
    drive: ()=> void;
}
interface Boat {
    sail: ()=> void;
}
const operateVehicle = (vehicle: Car | Boat) => {
    if('drive' in vehicle){vehicle.drive()}
    else{vehicle.sail()}
}
-------------------------------------
Use Case : Use the (in) operator when you need to check for the presence of specific properties in an object.