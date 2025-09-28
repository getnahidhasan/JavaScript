// const hasan = " Nahid Hasan Mim "
// console.log(hasan.trim());
// const newString = "Nahid Hasan Mim";
// console.log(newString.replaceAll("", "-"));
// // console.log(newString.includes("Nahid"));
// // console.log(newString.split(" "));
// // const name = "Nahid Hasan MIM";
// // console.log(name.split(" ",2));
// // const email = "nahid@example.com";
// // console.log(email)
// // const parts = email.split("@");
// // console.log(parts);
// // // ["nahid", "example.com"]
// // console.log("Username:", parts[0]); 
// // console.log("Domain:", parts[1]);

// // const csv = "101,Nahid,Developer";
// // const fields = csv.split(",");
// // console.log(fields);
// // const data = "apple | banana; orange, mango";
// // console.log(data.split(/[\|;,\s]+/));
// // // ["apple","banana","orange","mango"]
// // const url = "https://www.figma.com/design/T4VD3rgADmbupuATchGqWB/hamimit?node-id=2-345&t=27WYiDXCI8GUaeGF-0";
// // console.log(url.replace("figma", "hamimit"));
// // console.log(url.includes("hamimit"));
// // console.log(url.split(""));
// // const score = 100
// // console.log(score);
// // console.log(typeof(score));
// // const blc = new Number(100)
// // console.log(blc);
// // console.log(typeof(blc));
// // const blce = 100
// // console.log(blce.toString().length);
// // console.log(typeof(blce));
// // console.log(score.toFixed(2));

// // const otherNum = 123.08425
// // console.log(otherNum.toPrecision(3));

// // Math
// // function getRandomInt(max){
// //   return Math.floor(Math.random() * max);
// // }
// // console.log(getRandomInt(3));
// // // Expected output: 0, 1, or 2
// // console.log(getRandomInt(1));
// // // Expected output: 0
// // console.log(Math.random());
// // // Expected output: a number from 0 to <1

// // function getRandom() {
// //   return Math.random();
// // }

// // console.log(getRandom());

// // function getRandomArbitrary(min, max) {
// //   return Math.random() * (max - min) + min;
// // }
// // console.log(getRandomArbitrary(10,100));

// // function getRandomInt(min, max) {
// //   const minCeiled = Math.ceil(min);
// //   const maxFloored = Math.floor(max);
// //   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// // }
// // console.log(getRandomInt(1,10));

// // function getRandomIntInclusive(min, max) {
// //   const minCeiled = Math.ceil(min);
// //   const maxFloored = Math.floor(max);
// //   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// // }
// // console.log(getRandomIntInclusive(1,10));


// // ARRAY

// // const newArray = [0, 1, 2, 3, 4, 5];
// // const myHero = ["Thor", "Hulk", "Jane Foster"];
// // console.log(newArray[1]);
// // console.log(myHero);
// // const myArray2 = new Array(1,2,3,4,5,6,);
// // console.log(myArray2[2]);

// // const newArray = [1,2,3,4,5];
// // // newArray.push(6)
// // // console.log(newArray);
// // console.log(newArray.pop());

// // let numbers = [10, 20, 30, 40];
// // let last = numbers.pop();
// // console.log(last);     // 40  (pop return করলো শেষ element)
// // console.log(numbers);  // [10, 20, 30]  (শেষ element মুছে গেলো)


// // let fruits = ["apple", "banana", "mango", "orange"];

// // console.log(fruits.pop()); // orange
// // console.log(fruits.pop()); // mango
// // console.log(fruits);       // [ 'apple', 'banana' ]
// // let stack = [];
// // stack.push("A");
// // stack.push("B");
// // stack.push("C");
// // console.log(stack);     // [ 'A', 'B', 'C' ]
// // console.log(stack.pop()); // C
// // console.log(stack);       // [ 'A', 'B' ]
// // // UNSHIFT
// // let numbers = [10, 20, 30];
// // let newLength = numbers.unshift(5);
// // console.log(newLength); // 4  (নতুন length)
// // console.log(numbers);   // [5, 10, 20, 30]
// // let fruits = ["mango", "orange"];
// // fruits.unshift("apple", "banana");
// // console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange' ]
// // 📝 Summary
// // shift() → array এর শুরু থেকে element মুছে ফেলে।
// // let numbers = [10, 20, 30, 40];
// // let first = numbers.shift();
// // console.log(first);    // 10  (প্রথম element return করলো)
// // console.log(numbers);  // [20, 30, 40]  (প্রথম element মুছে গেলো)
// // Slice and Splice
// // let numbers = [10, 20, 30, 40, 50];
// // let sliced = numbers.slice(0, 4);
// // console.log(sliced);   // [20, 30, 40]
// // console.log(numbers);  // [10, 20, 30, 40, 50] (original unchanged)
// // let fruits = ["apple", "banana", "mango", "orange"];
// // let part = fruits.slice(2);
// // console.log(part);   // [ 'mango', 'orange' ]
// // console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange' ]
// // let numbers = [10, 20, 30, 40, 50];
// // let removed = numbers.splice(0, 2);
// // console.log(removed);  // [20, 30]  (removed items)
// // console.log(numbers);  // [10, 40, 50] (original changed)
// // let fruits = ["apple", "banana", "mango"];
// // fruits.splice(1, 0, "orange", "grapes");
// // console.log(fruits); // [ 'apple', 'orange', 'grapes', 'banana', 'mango' ]
// // let arr = [1, 2, 3, 4, 5];
// // arr.splice(2, 2, 99, 100);
// // console.log(arr); // [1, 2, 99, 100, 5]
// // let arr = [10, 20, 30];
// // let length = arr.unshift(5);
// // console.log(length); // 4 (নতুন length)
// // console.log(arr);    // [5, 10, 20, 30]
// // let fruits = ["mango", "orange"];
// // fruits.unshift("apple", "banana");
// // console.log(fruits); 
// // // [ 'apple', 'banana', 'mango', 'orange' ]
// // let arr = [2, 10, 20, 30, 40];
// // let first = arr.shift();
// // console.log(first); // 10 (removed item)
// // console.log(arr);   // [20, 30, 40]
// // let arr1 = [1, 2];
// // let arr2 = [3, 4];
// // let arr3 = arr1.concat(arr2);
// // console.log(arr3);   // [1, 2, 3, 4]
// // console.log(arr1);   // [1, 2] (unchanged)
// // console.log(arr2);   // [3, 4] (unchanged)
// // CONCAT  
// // let arr1 = [1,2];
// // let arr2 = [3,4];
// // let arr3 = arr1.concat(arr2);
// // console.log(arr3);
// // console.log(arr1);
// // console.log(arr2);
// // let arr = [1, 2, 3];
// // console.log(arr.join("-"));  // "1-2-3"
// // console.log(arr.join(""));   // "123"

// // const marvel_Heros = ["Thor", "SpiderMan", "IronMan"];
// // const dc_Heros = ["SuperMan", "Batman", "Flass"];
// // let newMarvel = marvel_Heros.concat(dc_Heros);
// // const allnew = [...marvel_Heros, ...dc_Heros];
// // console.log(allnew);

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300
// // console.log(Array.of(score1, score2, score3));

// // const colors = ["red", "yellow", "blue"];
// // colors[5] = "purple";
// // colors.forEach((item, index) => {
// //   console.log(`${index}: ${item}`);
// // });
// // // Output:
// // // 0: red
// // // 1: yellow
// // // 2: blue
// // // 5: purple

// // colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']



// // Start > 3.32 minit

// const marvel_Heros = ["Thor", "Spiderman", "IronMan"];
// const dc_heros = ["Superman","Batman","Flash"];
// // marvel_Heros.push(dc_heros);
// // console.log(marvel_Heros);
// // console.log(marvel_Heros[3][2]) //call array inside array
// // console.log(marvel_Heros.concat(dc_heros))
// // const allnewheros = [...marvel_Heros, ...dc_heros];
// // console.log(allnewheros);

// const anotherArray = [1,2,3,4,5,[6,7,8], 9, [10, 11,[12,13], 14 ], 15];
// // console.log(Array.isArray("1"));   // false (কারণ এটা string)
// // console.log(Array.isArray([1]));   // true (কারণ এটা array)
// // console.log(Array.isArray(123));   // false (কারণ এটা number)
// // console.log(Array.isArray({}));    // false (object কিন্তু array না)
// // console.log(Array.isArray([]));    // true (empty array)

// // // console.log(Array.isArray(anotherArray));     // true
// // console.log(Array.isArray(1));              // false
// // console.log(Array.isArray([1,2,3]));          // true
// // console.log(Array.isArray({name: "test"}));   // false

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3,));


// Array fst class over
// console.log("Nahid Hasan MIM")
// const obj1 = {
//   name: "Nahid Hasan MIM",
//   email: "user@gmail.com",
// }
// const obj2 = {
//   userName: "Nahid",
//   password: "nahid",
// }
// // const obj = {obj1, obj2};
// const newobj = Object.assign({}, obj1, obj2);
// console.log(newobj);
// console.log(obj1 === obj2)
// const newDemo = {...obj1, ...obj2,};
// console.log(newDemo)

// const newObj = [
//   {
//   age: "26",
//   email: "user@gmail.com"
//   },
//   {
//   name: "Nahid Hasan",
//   Address: "Dewla, Tangail",
//   }
// ]

// console.log(newObj[1].Address);

// const newObj = [
//   {
//     age: "26",
//     email: "user@gmail.com"
//   },
//   {
//     name: "Nahid Hasan",
//     Address: "Dewla, Tangail",
//   }
// ];

// // শুধু email বের করা
// console.log(newObj[0].email);  // "user@gmail.com"

// // শুধু Address বের করা
// console.log(newObj[1].Address); // "Dewla, Tangail"

// // লুপ ব্যবহার করে সব email বের করা
// newObj.forEach(obj => {
//   if (obj.email) {
//     console.log(obj.email);
//   }
// });

// // লুপ ব্যবহার করে সব Address বের করা
// newObj.forEach(obj => {
//   if (obj.Address) {
//     console.log(obj.Address);
//   }
// });

// const facebookUser = {
//   userName: "nahid",
//   password: "hasan",
//   isLogedIn: true,
// }
// console.log(facebookUser);
// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));
// console.log(facebookUser.hasOwnProperty("isLogedIn"));

// const person = {
//   name: "Nahid",
//   age: 26,
// };
// person.email = "user@gmail.com"; // dot notation দিয়ে যোগ
// // person["address"] = "Tangail";   // bracket notation দিয়ে যোগ
// console.log(person);
// // { name: 'Nahid', age: 26, email: 'user@gmail.com', address: 'Tangail' }


// const data = [
//   {id: 1, name: "hasan"},
//   {id: 2, name: "mim"},
// ]
// data.push({id: 3, name: "mim"});
// data[0].price = 100;
// console.log(data);

// const course = {
//   coursename: "JS",
//   price: 9999,
//   courseInstructor: "Nahid Hasan MIM",
//   instrituteName: "HAMIMIT.COM",
// }
// const {courseInstructor: Nahid} = course
// console.log(Nahid);
// console.log(course.instrituteName)
// const {instrituteName: Name} = course
// console.log(Name);

// const numbers = [10, 20, 30];

// // পুরোনো পদ্ধতি
// // const a = numbers[0];
// // const b = numbers[1];

// const [a, b, c] = numbers;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// Fuction

// function saymyname (numberone, numbertwo) {
//   console.log(numberone + numbertwo);
// }
// saymyname(1,2);
// saymyname(1,3);
// function saymyname (one, two){
//   let result = one + two;
//   return result;
// }
// const result = saymyname(1,5);
// console.log("result: ", result);

// function usermsg (username){
//   if(username === undefined){
//     console.log("Please Enter Valid User Name Again =>")
//     return;
//   }
//   else{
    
//   }
//   return `${username} just logged In`
// }
// const newUser = usermsg()
// console.log(newUser)

// function calculate (...num){
//   return num;
// }
// console.log(calculate(100, 200, 300));

// function calcualteDemo(num1, num2, ...num3){
//   return num2; 
// }
// console.log(calcualteDemo(11, 22, 23, 555, 666));
// const data = {
//   name: "Hasan",
//   price: 1000,
// }

// function handleObjcet(anyObject){
//   console.log(`UserName is: ${anyObject.name} and Price is: ${anyObject.price}.`);
// }
// handleObjcet(data)

// Scoope
// 1. let
// 2. var
// 3. const

// let

// let a = 100
// const b = 200
// var c = 300

// if (true){
//   let a = 10
//   const b = 20
//   var c = 30
//   console.log("inner:", c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// nested scope

// function one(){
//   const username = "Nahid"
  
//   function two (){
//     const website = "YouTube"
//     console.log(username);
//   }
//   // console.log(website)
//   two()
// }
// one()

// if (true) {
//   const userName = "Nahid"
//   if (userName === "Nahid") {
//     const website = " YouTube"
//     console.log(userName + website)
//   }
// }

// Interesting 
// console.log(addone(5)) // you can add function argue abobe the function.
// function addone (num) {
//   return num + 1
// }

// console.log(addtwo(5)) // you can not add function argue abobe the function.
// const addtwo = function (num) {
//   return num + 2
// }


// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;


// console.log(b); // ❌ Error: Cannot access 'b' before initialization
// let b = 20;

// let globalVar = "I am global";

// function test() {
//   console.log(globalVar); // Accessible
// }
// test();

///
//🟣 4. Scope

// Scope মানে হলো কোন variable কোথায় accessible হবে।

// Types of Scope in JS

// Global Scope
// সব জায়গায় accessible।

// let globalVar = "I am global";

// function test() {
//   console.log(globalVar); // Accessible
// }
// test();


// Function Scope
// ফাংশনের ভেতরে declare করা variable ফাংশনের বাইরে access করা যায় না।

// function demo() {
//   let x = 10;
//   console.log(x); // ✅ 10
// }
// // console.log(x); // ❌ Error


// Block Scope (let, const)
// শুধু { } ব্লকের ভেতরে accessible।

// if (true) {
//   let y = 20;
//   const z = 30;
//   console.log(y, z); // ✅ 20, 30
// }
// // console.log(y, z); // ❌ Error


// 👉 var এর কোনো block scope নেই, শুধু function scope আছে।

// if (true) {
//   var test = "I am var";
// }
// console.log(test); // ✅ "I am var" 

// console.log(y); // undefined
// // console.log(y); // ❌ ReferenceError
// // console.log(z); // ❌ ReferenceError

// var x = 10;
// let y = 20;
// const z = 30;

// var globalVar = "I am global";

// function outer() {
//   var outerVar = "I am global";
  
//   function inner() {
//     var innerVar = "Inner var";
//     console.log(globalVar);
//     console.log(outerVar);
//     console.log(innerVar);
//     return "inner Finished!";
//   }
//   console.log(inner())
//   return "Outer Finished!"; // ✅ return value দিলাম
// }
// console.log(outer());


// const user = {
//   userName: "Nahid Hasan Mim",
//   price: 1000,
  
//   welcomeMessage: function () {
//     console.log(`${this.userName} , welcome to the website.`)
//   }
  
// }
// user.welcomeMessage()
// user.userName = "Hasan";
// user.welcomeMessage()

// if (true) {
//   const userName = "Nahid"
  
//   if (userName === "Nahid") {
//     const website = " YouTube"
//     console.log(userName + website);
//   }
  
// }

// function chai () {
//   let userName = "Nahid"
//   console.log(this.userName);
// }
// chai()

// const chai = function () {
//   let userName = "Nahid"
//   console.log(this.userName);
// }
// chai()

// const chai = () => {
//   let userName = "Nahid"
//   console.log(this);
// }
// chai()

// const addtwo = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addtwo(2,3));


// implisite return

// const addtwo = (num1, num2) => num1 + num2; //demo ONe
// const addtwo = (num1, num2) => (num1 + num2); //demo two
// const addtwo = (num1, num2) => ({userName: "hasan"}) // take objects
// console.log(addtwo());



// Immediately Invoked Function Expressions //(IIFE) IIFE মানে হলো function declare করার সাথে সাথেই execute হয়ে যায়।

// Same Same but difrent = () two () = one for function defination and one for exicutation and befor exicution when done to stop this program to ; clone. otherwise your second function not working.

// function chai () {
//   console.log("DB CONNECTED");
// }
// chai()
// (function chai () { 
//   console.log("DB CONNECTED ONE");
// })(); //this is named (IIFE)

// (function arcode () {
//   console.log("DB CONNECTED TWO");
// })(); //(IIFE)
// // see code not working, lets fix it.  //(IIFE)

// (function fixIt () {
//   console.log("DB CONNECTED THREE");
// })(); //(IIFE)

// // another methode to do this

// (() => { 
//  console.log("DB CONNECTED FOUR")
//  })(); //this is normal (IIFE)

// // arguement and peramitter give and take: 

// ((name) => {
//   console.log(`THIS IS MY DB CONNECTED NUMBER: ${name}`)
// })("FIVE"); //(IIFE)

// IIFE মানে হলো function declare করার সাথে সাথেই execute হয়ে যায়।


// Javascript Executaion Context

// Executaion Context
// two type

// 1. call stack
// 2.

// 1. Global Executaion Context 
// 2. Function Executaion Context
// 3. Eval Executaion Context (Property of Global Object)


// phase to run JavaScript

// 1. Memory Creation phase (Some time called it: Creation phase)
// 2. Executaion phase ()

// LIFO (Last In Fast Out)

// function a() {
//   console.log("Inside A");
// }

// function b() {
//   a();
//   console.log("Inside B");
// }

// b();

// function one() {
//   console.log("Inside ONE");
// }

// function two() {
//   one();
//   console.log("Inside TWO");
// }

// function three() {
//   two();
//   console.log("Inside THREE");
// }

// three();
// console.log("Global End");

// let val1 = 10;
// let val2 = 5;
// function addNum (num1, num2) {
//   let total = num1 + num2;
//   return  total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 15);
// console.log(result1, result2)

// executaion context
// 1. Global executaion Context
// 2. memory phase
// 3. executaion phase




// let age1 = 22;
// const name1 = "nahid";
// var num2 = 22;

// function newF () {
//   let age = 29;
//   const name = "nahid";
//   var num = 34;
// }
// newF();

// console.log(age1);
// console.log(name1)
// console.log(num2)



// function counter(){
//   let count = 10;
//   return function(){
//     count++;
//     console.log(count);
//   }
// }

// const increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3
// increment(); 
// increment(); 
// increment(); 
// increment();

// var globalVar = "I am global";

// function showGlobal() {
//   console.log(globalVar); // I am global
// }

// // showGlobal();
// console.log(globalVar); // I am global

// function myFunction() {
//   var funcVar = "I am function scoped";
//   console.log(funcVar); // I am function scoped
// }

// myFunction();
// console.log(funcVar); // Error: funcVar is not defined

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true



// Control Flow



// if
















// ✅ JavaScript Fundamental Checklist (তুমি যেগুলো already শিখেছো)
// 🔹 String Methods

// .trim() → whitespace remove

// .replaceAll() → replace multiple chars

// .includes() → substring আছে কি না

// .split() → string → array

// 🔹 Number & Math

// Number object (new Number, typeof)

// .toString() & length check

// .toFixed() → decimal places

// .toPrecision() → নির্দিষ্ট digit

// Math.random() & Random functions (inclusive, exclusive)

// 🔹 Array Basics

// Array তৈরি (literal, new Array)

// .push() / .pop() (stack like)

// .shift() / .unshift() (queue like)

// .slice() → copy portion (original unchanged)

// .splice() → remove/replace (original পরিবর্তিত হয়)

// .concat() → merge arrays

// ...spread operator

// .join()

// .reverse()

// Array.of()

// Array.isArray()

// Nested arrays & flatten করার concept

// 🔹 Objects

// Object তৈরি ও access

// Object merge → Object.assign() vs spread ...

// Array of objects → access nested data

// Object.keys(), Object.values(), Object.entries()

// .hasOwnProperty()

// Destructuring (object & array)

// 🔹 Functions

// Normal functions (parameter, return)

// Default value / undefined check

// Rest parameters (...num)

// Passing objects to functions

// Nested functions & scope access

// Function hoisting (function vs function expression)

// 🔹 Scope

// var, let, const difference

// Global scope, Function scope, Block scope

// Nested scope

// Hoisting (var = undefined, let/const = error)

// Closure (inner function accessing outer variable)

// 🔹 this keyword

// Inside object methods → works

// Inside normal function → undefined in strict mode

// Inside arrow function → this points to outer scope

// 🔹 Arrow Functions

// Explicit return vs Implicit return

// Returning objects from arrow functions

// 🔹 IIFE (Immediately Invoked Function Expression)

// Named & Anonymous IIFE

// Argument pass to IIFE

// 🔹 Execution Context

// Global Execution Context

// Function Execution Context

// Call Stack (LIFO)

// Memory Creation phase & Execution phase

// 🔹 Control Flow

// if statement

// (তুমি এখনো শেখনি: if-else, switch, loops, break/continue)




// let userName = "Nahid Hasan Mim";
// let email = "getnahidhasan@gmail.com";
// console.log(`User Name Is: ${userName} and Email Address is: ${email}`);

// let userName = " Nahid Hasan Mim ";
// let email = "getnahidhasan@gmail.com";

// // Use the .trim() method to remove the extra spaces
// console.log(`User Name Is: ${userName.trim()} and Email Address is: ${email}`);

// let userName = " Nahid Hasan Mim ";
// let email = "getnahidhasan@gmail.com";

// console.log(userName.trim());

// let badWord = "This AI is badword and again badword!";
// updateBadWord = badWord.replaceAll("badword", "*****");


// let message = "This AI is badword and again badword!";
// let cleanMessage = message.replaceAll("badword", "***");

// console.log(cleanMessage);
// // "This AI is *** and again ***!"


// let check = "How do I login to Hamimit?";
// let checkIfHave = check.includes("login");
// console.log(checkIfHave);




// start loop


// for (let i = 4; i < 5; i++) {
//   console.log(`The Looping Number Is: ${i}`);
  
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

