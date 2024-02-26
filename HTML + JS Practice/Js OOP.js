// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     print() {
//         console.log("Name: ", this.name);
//         console.log("Age: ", this.age);
//         console.log("Country: ", this.country);
//     }
// }

// const person1 = new Person("Ali", 18, "Egypt");
// person1.print();

// class Rectange{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     perimeter() {
//         return this.width * 2 + this.height * 2;
//     }
// }

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     display() {
//         console.log('Make: ', this.make);
//         console.log('Model: ', this.model);
//         console.log('Year: ', this.year);
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, numOfDoors) {
//         super(make, model, year);
//         this.numOfDoors = numOfDoors;
//     }

//     display() {
//         super.display();
//         console.log(`Doors: ${this.numOfDoors}`);
//     }
    
// }

// const car = new Car('Honda', 'Accord', 2023, 4);
// car.display();


// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         console.log(`A/c No.: ${accountNumber}`);
//         console.log(`Opening Balance: $${balance}`);
//     }

//     deposit(num) {
//         this.balance += num;
//         console.log(`Deposited: $${num}`);
//     }

//     withdraw(num) {
//         if (num < this.balance) {
//             this.balance -= num;
//             console.log(`Withdrawn: $${num}`);
//         } else {
//             console.log("Not Enough Balance");
//         }
//     }
    
//     displayBalance() {
//         console.log(`Account Balance: $${this.balance}`);
//       }
// }



// const account1 = new BankAccount(102939824, 5000);

// account1.displayBalance();
// account1.deposit(500);
// account1.displayBalance();


// class Employee {
//     constructor(name, salary) {
//         this.name = name; 
//         this.salary = salary;
//     }
//     anualSalaray() {
//         return this.salary * 12;
//     }
// }

// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department;
//     }

//     anualSalaray() {
//         const baseSalary = super.anualSalaray;
//         const bonus = 0.1;
//         return (bonus * baseSalary) + baseSalary;
//     }
// }


// class BankAccount {
//     constructor(accName, accNumber, accBalance) {
//         this.accNumber = accNumber;
//         this.accName = accName;
//         this.accBalance = accBalance;
//         console.log("Account Name:", this.accName)
//         console.log("Account Number:", this.accNumber);
//         console.log("Account Balance:", this.accBalance);
//     }

//     withdraw(ammount) {
//         if (ammount <= this.accBalance) {
//             this.accBalance -= ammount;
//             console.log("Remaining Balance:", this.accBalance);
//         } else {
//             console.log("Not Enough Funds");
//         }

//     }

//     deposit(ammount) {
//         this.accBalance += ammount;
//         console.log("Balance:", this.accBalance);
//     }

//     transfer(account, ammount) {
//         if (ammount <= this.accBalance) {
//             account.deposit(ammount);
//             this.accBalance -= ammount;
//             console.log("Balance: ", this.accBalance)
//             console.log("Other balance: ", account.accBalance)
//         }
//     }
// }

// const account1 = new BankAccount("Ali", 1298487, 99999);
// const account2 =  new BankAccount("Rubric", 1298292, 2000);

// account1.transfer(account2, 100)

