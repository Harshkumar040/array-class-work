//do it in html
"use strict"
//globally
//window obj for browser
console.log(this);
//this key within teh function
function a(){
    console.log(this)
}
//in strict mode
//non deleted,read only
a();
//the value of this also depeneds on strict mode
//also depends on how the function in is called
a();//in strict mode->udefined
//if it is in non strict mode it will give window obj
//this keyword is behaved like global obj
window.a();
//if it called with reference then it will again give u window obj in strict mode 

//also depends on how the function in is called
const obj={
    y:5,
    //function
    x:function() {//x is method when creating a function inside an object
    console.log(this);
    //this key will refer to obj, this.y->obj of y
},
};
obj.x();

//call apply and bing (sharing methods)
const student={
    printName:function(){
        console.log(this);
    },
};
student.printName();
const student2={
    name:"rahul",
};
student.printName.call(student2);
student.printName.apply(student2);
//bind to create new function with this set for student 2
const printNameForstudent2=student.printName.bind(student2);