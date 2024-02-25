class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    print() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("Country: ", this.country);
    }
}

const person1 = new Person("Ali", 18, "Egypt");
person1.print();