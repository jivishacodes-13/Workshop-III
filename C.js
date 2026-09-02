//question 1
let employee = {
    name: "Kshitij Sharma",
    salary: 1500000000000,

    increaseSalary: function(amount) {
        this.salary = this.salary + amount;
    }
};

employee.increaseSalary(5000);

console.log(employee.name);
console.log(employee.salary);
//question 2
let student = {
    name: "Kshitij Sharma",
    marks: 95,

    addMarks: function() {
        this.marks = this.marks + 5;
    },

    display: function() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
};

student.addMarks();
student.display();
//question 3
function college(){
    let dep={
        name:"Computer Science",
        hod:"Dr. Deepali Dev"
    };
    let class_obj={
        name:"Class AIML",
        strength:80
    };
    console.log("Department:", dep.name);
    console.log("HOD:", dep.hod);
    console.log("Class:", class_obj.name);
    console.log("Strength:", class_obj.strength);
}
college();