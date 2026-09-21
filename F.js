// class Employee {
// 	constructor(id, name, basicSalary) {
// 		this.id = id;
// 		this.name = name;
// 		this.basicSalary = basicSalary;
// 	}

// 	calculateSalary() {
// 		return this.basicSalary;
// 	}
// }

// class Manager extends Employee {
// 	constructor(id, name, basicSalary, incentive) {
// 		super(id, name, basicSalary);
// 		this.incentive = incentive;
// 	}

// 	calculateSalary() {
// 		return super.calculateSalary() + this.incentive;
// 	}
// }

// const employee = new Employee(101, "Jivishavashava", 30000);
// const manager = new Manager(102, "Omikavakavaka", 50000, 10000);

// console.log("Employee Salary:", employee.calculateSalary());
// console.log("Manager Salary:", manager.calculateSalary());
// USING TIMEOUT PRINT SOMETHING AFTER 5 SECONDS
function printMessage() {
    console.log("Hello, jivishavashava.");
}
setTimeout(printMessage, 5000);
console.log("how are you????????");