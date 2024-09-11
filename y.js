// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     displayInfo(){
//         console.log("The name of the student is: ",this.name);
//         console.log("The age of the student is: ",this.age);
//     }
// }
//creating instance for the class student
// const student=new Student('peter',20);
// student.displayInfo();


//inhertance
class Car{
    constructor(brand){
        this.brand=brand;
    }
    present(){
        return "I have a"+this.brand;
    }
}
class Model extends Car{
    constructor(brand,Model){
        super(brand);//call the parent class car
        this.Model=Model;
    }
    show(){
        return this.present()+' this is a'+this.Model;
    }
}
const mycar=new Model(" fort"," mustang");
console.log(mycar.show());


