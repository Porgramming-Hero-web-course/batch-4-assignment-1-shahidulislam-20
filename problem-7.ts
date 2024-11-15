class Car {
    make : string;
    model : string;
    year : number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        const currentYear : number = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;
    }
}

const car = new Car('Honda', 'Civic', 2018);
const result = car.getCarAge();
console.log(result);