//initialise the array
const number=[1,2,3,4,5,6,7,8,9,10];

const evenNumbers=number.filter(num=>num%2==0);  //filter()
console.log("Even numbers: ",evenNumbers);

const squareNumbers=evenNumbers.map(num=>num**2);
console.log("Square numbers",squareNumbers);

const FirstGreater50=squareNumbers.find(num=>num>50);
console.log("Greater than 50 ",FirstGreater50);

const additionNumber=[121,252];
const combinedArray=squareNumbers.concat(additionNumber);
console.log("Combined array is: ",combinedArray);


//array.form()
const str='789561236';
const numArrayFormStr=Array.from(str);
console.log("array from string: ",numArrayFormStr);

//array.of()
const arrauOfNum=Array.of(12,11,15,12,);
console.log("array of() ",arrauOfNum);

//destructing
const myFavLang=['HTML','JS','JAVA','C','PYTHON'];
//ES5
var a=myFavLang[0];
var b=myFavLang[4];
var c=myFavLang[2];
console.log("1st language:", a);
console.log("2nd language:", b);
console.log("3rd language:", c);

var lan1=myFavLang[0];
console.log("1st language",+lan1);
const [firstlang,secondlang,thirdlang]=myFavLang;
console.log("firstlang",firstlang);
console.log("secondlang",secondlang);

//spread operator
const fruits=['apples','grapes','cherry'];
const vegetable=['carrot','beans','poatato'];
const fruitcopy=[...fruits];
console.log("fruits copy: ",fruitcopy);

console.log("Harsh");
















