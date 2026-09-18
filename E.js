// with constructor
// class AA{
//     constructor (name){
//         console.log("Constructor called");
//         console.log("Name: " + name);
//     }
// }
// let obj = new AA("Jivisha Gupta");
// without constructor
// class A{
//     name;
//     name = "Omika Kumar";
//     show(){
//         console.log("Name: " + this.name);
//     }
// }
// let obj2 = new A();
// obj2.show();
// create a class section A
// class Student {
//     constructor(name, age, rollNo) {
//         this.name = name;
//         this.age = age;
//         this.rollNo = rollNo;
//     }
//     show() {
//         console.log("Name: " + this.name + ", Age: " + this.age + ", Roll No: " + this.rollNo);
//     }
// }
// let student1 = new Student("Omika", 20, 1);
// let student2 = new Student("Jivisha", 22, 2);
// let student3 = new Student("Saanvi", 21, 3);
// let student4 = new Student("Kshitij", 23, 4);
// let student5 = new Student("Avneet", 20, 5);

// student1.show();
// student2.show();
// student3.show();
// student4.show();
// student5.show();
// // static method
// class hello {
//     static name = "Omika Kumar";
//     static display() {
//         console.log("Name: " + hello.name);
//     }
// }
// hello.display();
// class hello1 {
//     static name = "Jivisha Gupta";
//     constructor() {
//         this.instructor = "Instance variable";
//     }
//     show(){
//         console.log("Instructor: " + this.instructor);
//         console.log("Name: " + hello1.name);
//     }
// }
// let obj3 = new hello1();
// obj3.show();
// University wala program
class Student {
    static count = 0;
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.count++;
    }
    displayResult() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        if (this.marks >= 40)
            console.log("Result: Passed");
        else
            console.log("Result: Failed");
    }
    static displayCount() {
        console.log("Total Students:", Student.count);
    }
}
let s1 = new Student(101, "Jivisha", 95);
let s2 = new Student(102, "Omika", 97);
let s3 = new Student(103, "Saanvi", 96);
s1.displayResult();
s2.displayResult();
s3.displayResult();
Student.displayCount();