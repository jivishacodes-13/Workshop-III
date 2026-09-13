// let student = {
//     name: "Jivisha Gupta",
//     age: 20,
//     branch: "Artificial Intelligence",
//     section: "A", 
//     addMarks: function(marks) {
//         this.marks = marks;
//     },
//     display: function() {
//         console.log("Name:", this.name);
//         console.log("Age:", this.age);
//         console.log("Branch:", this.branch);
//         console.log("Section:", this.section);
//         console.log("Marks:", this.marks);
//     }
// }
// student.addMarks(95);
// student.display();
// //using rest operator
// function sum(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }sssss
//     return total;
// } 
// function displayDeails(name,age,...marks){
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("Marks:", ...marks);
// }
// function greetAndSum(name, ...numbers) {
//     const total = numbers.reduce((sum, num) => sum + num, 0);
//     console.log(`Hello ${name}, Total = ${total}`);
// }
// greetAndSum("Jivisha", 10, 20, 30, 40, 50);
// create a rest operator that takes input from user and print the sum of the numbers
function printSum(...numbers) {
    document.write(`Sum = ${numbers.reduce((sum, number) => sum + number, 0)}`);
}
const numbers = prompt("Enter numbers separated by spaces:")
    .split(" ")
    .map(number => parseInt(number));
printSum(...numbers);