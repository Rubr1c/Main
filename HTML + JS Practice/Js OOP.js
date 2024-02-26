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




class BankAccount {
    static count = 0;
    static users = {};
    

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.accountInfo = [];
    }

    checkUserPassCombo(username, password) {
        return BankAccount.users[username][0] == password;
    }

    checkUserExist(username) {
        return BankAccount.users.hasOwnProperty(username);
    }

    addUserToDB(username, password, accountNumber, balance) {
        BankAccount.users[username] = [password, accountNumber, balance];
    }

    addCount() {
        BankAccount.count++;
        return BankAccount.count;
    }

    updateBalance(username, balance) {
        BankAccount.users[username][2] = balance;
    }

    makeAccount(username, password) {
        if (BankAccount.users.hasOwnProperty(username)) {
            console.log("username is already taken");
            return;
        }
        let includesNumber = false;
        const specialChar = "!@#$%^&*()-_=+"
        let includesSpecial = false;
        for (const char of password) {
            if (!isNaN(char)) {
                includesNumber = true;
            }
            if (specialChar.includes(char)) {
                includesSpecial = true;
            }
        }
        if (!includesSpecial) {
            console.log("add special char to password");
            return;
        } 
        if (!includesNumber) {
            console.log("add number to password");
            return;
        }


        if (username.length >= 4 && password.length >= 8) {
            this.username = username;
            this.password = password;
            const count = this.addCount()
            this.accountNumber = count;
            this.balance = 0;
            this.accountInfo.push(this.username);
            this.accountInfo.push(this.password);
            this.accountInfo.push(this.accountNumber);
            this.accountInfo.push(this.balance);
            this.addUserToDB(username, password, this.accountNumber, this.balance);
            console.log("Account Created!");
            console.log("Username: ", this.username);
            console.log("Account Number: ", this.accountNumber);
            console.log("Balance: ", this.balance);
        } else {
            console.log("username or password is too short ");
            return;
        }
        
    }

    checkInfo() {
        console.log("Username: ", this.username);
        console.log("Account Number: ", this.accountNumber);
        console.log("Balance: ", this.balance);
    }

    deposit(ammount) {
        this.balance += ammount;
        this.updateBalance(this.username, this.balance);
        console.log("Deposited: ", ammount);
        console.log("New Balance: ", this.balance);
    }

    withdraw(ammount) {
        if (this.balance >= ammount) {
            this.balance -= ammount;
            this.updateBalance(this.username, this.balance);
            console.log("Withdrawed: ", ammount);
            console.log("New Balance: ", this.balance);
        } else {
            console.log("Not Enough Funds");
        }
    }

    transfer(account, ammount) {
        if (this.balance >= ammount) {
            this.balance -= ammount;
            this.updateBalance(this.username, this.balance);
            console.log("New Balance: ", this.balance);
            account.deposit(ammount);
        }
    }

}

class Login extends BankAccount {
    constructor(username, password) {
        super();
        if (super.checkUserExist(username)) {
            if (super.checkUserPassCombo(username, password)) {
                this.username = username;
                this.password = password;
                this.accountNumber = BankAccount.users[username][1];
                this.balance = BankAccount.users[username][2];
                console.log("Logged in!");
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("User Does Not Exist");
        }
    }

}



const account1 = new BankAccount("Ali", "Zaghloul");

account1.makeAccount("Rubric", "Rubric22!")

const account2 = new BankAccount("Rubric", "zz");

account2.makeAccount("Choo", "21@!aaaaaa")

const account3 = new Login("Rubric", "Rubric22!");

account2.deposit(100);
account3.deposit(200);

account2.transfer(account3, 50);

account3.checkInfo()


