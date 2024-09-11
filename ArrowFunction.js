//simple function 
function hello(){
    console.log("Hello");

}
hello();

//function with loop,parameter
function printNumber(n){
    for(let i=0;i<n;i++)
        console.log(i);
}
printNumber(5);

//function with multi parameters
function add(a,b){
    let sum=a+b;
    console.log(sum);
}
add(4,5);

//function with return
function square(number){
    return number*number;
}
const result=square(6);
console.log(result);

//arrow functions
//arrow function with no input argument
const greet=()=>{
    console.log("Hello World");
}
greet();

//arrow function with single input argument
const s=x=>x*x;
console.log(s(6));

//arrow function with single line function body
const addarr=(a,b)=> a+b;
console.log(addarr(4,5));

//arrow function with single line expression broken over mutiple line
const messge=(name,age)=>(
    `Hello,${name} you are ${age} years old`
);
console.log(messge('alice',25));

//object literals return value
const createPerson=(name,age)=>({
    name:name,
    age:age
});
const person=createPerson('rahul',25);
console.log(person);


