// Task 1 ---> create a variable and assign a value to it and print it in the terminal
let n = "Jivisha Gupta";
console.log(n);
let id = 123456;
console.log(id);
let branch = "Artificial Intelligence";
console.log(branch);
let section = "A";
console.log(section);
// Task 2 ---> check even odd using if else statement
let number = 10;
if (number % 2 === 0) {
  console.log(number + " is even");
}
else{
    console.log(number + " is odd");
}
// task 3 ---> student marks and percentage using function
function totalMarks(math , eng , sci){
    return math + eng + sci;
}
function percentage(total){
    return (total / 300 * 100)
}
total = totalMarks(95 , 99 , 100);
console.log("TOTAL MARKS" , total);
console.log("PERCENTAGE" , percentage (total) , "%" );
