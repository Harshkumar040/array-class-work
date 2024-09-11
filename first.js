//understand of var,Let,const
//var declaration
//scope declaration
//global declaration
var globalVar="i am global";
console.log(globalVar);


//local declaration
function abc(){
    var localVar="It is local";
    console.log(localVar);

}
abc();

function a(){
    var q=45;
    var q=3;
    console.log(q);
    //in var redeclaration is allowed
}
a();

//reassignment in var
function xyz(){
    var e=78;
    var e=8; //reassignment is allowed in var
    console.log(e);

}
xyz();

//hoisting
//a variable can be used before declaration
//declaration moves on top
function H(){
    console.log("Before declaration: ",v);
    var v=45;
    console.log("After declaration:  ",v);
//hoisting is allowed
    
}
H();


//Let
//Scope declaration
let globalLet="it is global";
console.log(globalLet);
function x(){
        let localLet="local"
        console.log(localLet);
    }
 x();

 //redeclaration by let
 function redecByLet(){
    let f=30;
    // let z=55; //no redeclaration is allowed in let
    console.log(f);

 }
 redecByLet();

 function reassigByLet(){
    let y=20;
    y=77;
    console.log(y)
 }
reassigByLet();
//hoisting is not allowed in Let so it wont work
// function Hois(){
//     console.log("before declaration: ",m);
//     let m=78;
//     console.log("After declaration: ", m);
// }
// Hois();

//const declaration
//scope declaration
const globalConst="i am global";
console.log(globalConst);

//local declaration
function abc(){
    const a="I am local";
    console.log(a);
}
abc();

function G(){
    const b=10;
    //const b=45; //redeclaration is not possible by const //if we'll uncomment this line it will not work
    console.log(b);
}
G();

//reassigmnet by const
function D(){
    const j=4;
    // j=5; if we'll uncomment this line it will not work
    console.log(j);
}
D();


//hoisting
function H(){  
    const v=45;
   // v=45; reassihmnet is not allowed
    console.log(v); 
}
H();

//simple function
function greet(){
    

}
greet();