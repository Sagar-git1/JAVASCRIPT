//console is a global object and there are inbuilt methods such as log,ingo,warn,error
console.log("Hi this is sagar");
console.info("this is info section");
console.warn("this is warning section");
console.error("this is error section");

/* 

*/

// Concatenating using addition operator
let firstName = "Hema";
let lastName = "Sagar";
let fullName = firstName + " "+ lastName // concatenation, merging two string together.
console.log(fullName);

//we have another way to concatenate the things
let fullInfo = `my full name is ${firstName} ${lastName}`;
console.log(fullInfo);

//string methods
let string = "Javascript";
let lengthOfString = string.length;
let lastIndex = string.length-1;
console.log(string[0]);
console.log(string[1]);
console.log(lengthOfString);
console.log(lastIndex);

// charAt(): Takes index and it returns the value at that index
let value= string.charAt(0);
console.log(value);

// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
let string2 = '30 Days Of JavaScript'
console.log(string2.charCodeAt(3)) // D ASCII number is 68
// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)
let string3 = "30"
console.log(string3.concat("Days","of","Javascript"));
console.log(string3.concat(" ","Days"," ","of"," ","Javascript"));

//alert('Welcome to 30DaysOfJavaScript')
/* let number = prompt('Enter number', 'number goes here')
console.log(number) */

/* const agree = confirm('Are you sure you like to delete? ')
console.log(agree) 
result will be true or false based on what you click on the dialog box */

/* let number = prompt('Enter number', 'number goes here')
console.log(number) */

const now = new Date()
console.log(now);

let num = 2;
if(num>0){
    console.log(`${num} is a positive value`);
}else{
    console.log(`${num} is a non positive value`)
}

//switch statement
/* let weather = prompt("Enter the weather condition today");
switch(weather){
    case 'sunny':
        console.log("It is sunny");
        break;
    case 'cloudy':
        console.log(`It is cloudy today`);
        break;
    case 'rainy':
        console.log("It is rainy today");
        break;
    default:
        console.log("none of them matched");
}
 */
//How to create an empty array
//Using Array constructor
const arr = Array();
console.log(arr);
let arr1 = new Array();
console.log(arr1);

//Using square brackets([]) most recommended
const arr3 = [];
console.log(arr3);
// Array can have items of different data types 
const array = [
    "Sagar",
    123,
    true,
    {id:101,marks:90}
]
console.log(array);
//Creating an array using split
let js = "Javascript";
let jsarray = js.split("");
console.log(jsarray);
// creating an array with constructor of a size
const arry = Array(8); // creates an empty array with size 8
const arrynew= new Array(10); //creates an empty array with size 10
console.log(arry,arrynew);
const arrFill = Array(8).fill('X');
console.log(arrFill);
console.log(arrFill.length);
const numbers = [1, 2, 3, 4, 5]
//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1

const numbers2 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers2)) // true

const numbers3 = [1,2,3,4,5];
const createdStr = numbers3.toString();
console.log(createdStr);
//Slice method : To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numbers4 = [1,2,3,4,5];
console.log(numbers4.slice()); //it copies all  item
console.log(numbers4.slice(1,4)); // -> [2,3,4] // it doesn't include the ending position
console.log(numbers4);
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers5 = [1, 2, 3, 4, 5]
numbers5.splice()
console.log(numbers5)

const numbers6 = [1, 2, 3, 4, 5]
numbers6.splice(0,1)
console.log(numbers6) 
// Push and pop 
const numbers7 = [1, 2, 3, 4, 5]
numbers7.push(6)
console.log(numbers7) // -> [1,2,3,4,5,6]

numbers7.pop() // -> remove one item from the end
console.log(numbers7) // -> [1,2,3,4,5]

//shift: Removing one array element in the beginning of the array.
const numbers8 = [1, 2, 3, 4, 5]
numbers8.shift() // -> remove one item from the beginning
console.log(numbers8) // -> [2,3,4,5]
//unshift: Adding array element in the beginning of the array.
numbers8.unshift(0)
console.log(numbers8);
//LOOPS 
//while loop
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}
//do whileloop
let j = 11;
do{
    console.log(j);
    j++
}while(j <=10)
// for loop
for(k=10;k>=0;k--){
    console.log(k);
}
//for of loop
let countries = ['India','USA','Australia'];
for(country of countries){
    console.log(country);
}
//Function Declaration
//Unlimited number of parameters in regular function
function func(){
    console.log(arguments);
}
func(1,2,3,4,5,"krishna");
/* Unlimited number of parameters in arrow function
Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. */

let newFunction = (...args)=>{
    for(i=0;i<args.length;i++){
        console.log(args[i]);
    }
}
newFunction("Krishna","Sagar","Kishan");
// Anonymous function or without name /expression function

const anyFunction =function(){
    console.log("Anonymous function");
}
anyFunction();
//Self Invoking functions
(function(){
    console.log("Self Invoking function");
})();
//default parameters in functions
function paramFunc (name = "Kishan"){
    return name;
}
console.log(paramFunc());
console.log(paramFunc("Ramki"));
//default parameters in arrow functions
const defParam = (num = 2) =>  num*num ;
console.log(defParam());
console.log(defParam(5));

a = "Javascript";

let mam = "mama";

let person = {
    name: 'Krish',
    age: 25,
    id: 101
}
console.log(person);
//Object methods
//Assign is to copy a existing object to another object without modifying it
const newPerson = Object.assign({},person);
console.log(person);
//Object.keys: To get the keys or properties of an object as an array
let keysOfPerson = Object.keys(newPerson);
console.log(keysOfPerson); //(3) ['name', 'age', 'id']
//Object.values:To get values of an object as an array
let values = Object.values(newPerson);
console.log(values);//(3) ['Krish', 25, 101]
//Object.entries:To get the keys and values in an array
let entries = Object.entries(newPerson);
console.log(entries);
//hasOwnProperty: To check if a specific key or property exist in an object
console.log(newPerson.hasOwnProperty('name'))
/* Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback. */
const callback = (n) => n*n;
function cube (callback,n){
    return callback(n)*n;
}
console.log(cube(callback,2))
//SetTimeout - It calls the function after the completion of time mentioned,only once
let sayHello = () => console.log("Hi,Hello");
setTimeout(sayHello,1000);
//SetInterval
let sayWelcome = () => console.log("Welcome guys");
// setInterval(sayWelcome,1000);

//MAP 
let arrMap = [1,2,3,4,5];
let newArrMap = arrMap.map((n)=>n*n);
console.log(newArrMap);

//Filter 
const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];
let countriesWithLand = countries1.filter((country)=> country.includes('land'));
console.log(countriesWithLand)
//Find  - Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age);