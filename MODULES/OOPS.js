// create a parent class named vehicle inside a function. This class should have a constructor that takes make and model as parameter,private fields for make and model 
// and a method getDetails that return a string with the make and model.Add a state method compareVehicles that take two vehicle isntance and returns true if they have
// if they have the same make and model. Then, create a child class named Car that ectends Vehicle and adds new properties year and mileage. The Car class should  
// Override the getDetails method to include the year and mileage in the returned string.Add a method drive that increases the mileage by a given amount. Finally, 
//create an instance of the car class,log the deatils to the console, and use the static method to copmpare two car instances 

function createVehicleClass() {
    class Vehicle {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }

        getDetails() {
            return `Make: ${this.make}, Model: ${this.model}`;
        }
        static compareVehicles(vehicle1, vehicle2) {
            return vehicle1.make === vehicle2.make && vehicle1.model === vehicle2.model;
        }
    }

    class Car extends Vehicle {
        constructor(make, model, year, mileage) {
            super(make, model); 
            this.year = year;   
            this.mileage = mileage;
        }

        getDetails() {
            return `${super.getDetails()}, Year: ${this.year}, Mileage: ${this.mileage} km`;
        }

        drive(distance) {
            this.mileage += distance;
        }
    }
    const car1 = new Car('BMW', 'Corolla', 1999, 12300);
    const car2 = new Car('Mustang', 'Civic', 1937, 14500);

    console.log(car1.getDetails()); 
    console.log(car2.getDetails());

    car1.drive(500);
    console.log(car1.getDetails()); 

    const areSame = Vehicle.compareVehicles(car1, car2);
    console.log(areSame); 
}

createVehicleClass();

