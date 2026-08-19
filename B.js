let str="Welcome Omika and Saanvi to the world of JavaScript";

//1 upper case
console.log("Upper case=",str.toUpperCase());

//2 lower case
console.log("Lower case=",str.toLowerCase());

//3 charAt
console.log("Character at index 4=",str.charAt(4));

//4 lastindexof
console.log("Last index of 'word'=", str.lastIndexOf("word"));

//5 indexof
console.log("Index of 'Java'=", str.indexOf("Java"));

//6 slice
console.log("Slice=", str.slice(0,5));

//7 split
let data="HTML,CSS,JavaScript";
let result=data.split(",");
console.log("Split=", result);

//8 replace
let text="I Love Java";
console.log("Replace=", text.replace("Java", "Javascript"));

//9 concat
let first="Kshitij";
let last="Sharma";
console.log("Concat=", first.concat(" ",last));

//10 includes
console.log("Includes 'Java'=", str.includes("Java"));

//11 array of objects
let students = [
    { name: "Omika", age: 20, branch: "AIML", section: "A" },
    { name: "Saanvi", age: 21, branch: "AIML", section: "B" }
];
console.log("Students=", students);

//12 pop push shift unshift
let arr=[1,2,3,4,5];
console.log("Original Array=", arr);
arr.pop();
console.log("After pop=", arr);
arr.push(6);
console.log("After push=", arr);
arr.shift();
console.log("After shift=", arr);
arr.unshift(0);
console.log("After unshift=", arr);

//13 date object
let date=new Date();
console.log("Current Date and Time=", date);
let y=date.getFullYear();
console.log("Full Year=", y);
let m=date.getMonth();
console.log("Month=", m);

//14 math object
let num=6.7;
console.log("Round=", Math.round(num));
console.log("Floor=", Math.floor(num));
console.log("Ceil=", Math.ceil(num));
console.log("Random Number between 0 and 1=", Math.random());
console.log("Random Number between 1 and 10=", Math.floor(Math.random() * 10) + 1);
console.log("Square Root of 16=", Math.sqrt(16));
console.log("Power of 2^3=", Math.pow(2,3));
console.log("Absolute Value of -5=", Math.abs(-5));
console.log("Max of 10, 20, 30=", Math.max(10, 20, 30));
console.log("Min of 10, 20, 30=", Math.min(10, 20, 30));
//using array of numbers
let numbers=[10,20,30,40,50];
console.log("Max of array=", Math.max(...numbers));
console.log("Min of array=", Math.min(...numbers));
