#include <iostream>
#include <cmath>
using namespace std;

    // class Pizza {
    //     public:
    //         string topping1;
    //         string topping2;
    //     Pizza(string topping1){
    //         this->topping1 = topping1;
    //     }
    //     Pizza(string topping1, string topping2){
    //         this->topping1 = topping1;
    //         this->topping2 = topping2;
    //     }
    // };



    // int main() {
    //     Pizza pizza1("pepperoni");
    //     Pizza pizza2("mushrooms", "pepers");
    //     int x = 5;
    //     cout << pizza1.topping1;

    //     return 0;
    // }


// class Stove{
//     private:
//         int temperature = 0;
//     public:
//         int getTemperature() {
//             return temperature;
//         }
// };

// int main() {
//     Stove stove;
//     return 0;
// }


// class Rectange {
//     private:
//         int length;
//         int width;
//     public:
//         Rectange (int l, int w) : length(l) , width(w) {}
//         int area() {
//             return length * width;
//         }
//         int perimeter() {
//             return  2 * (length + width);
//         }
// };

// int main() {
//     Rectange rec1(4,3);
//     cout << "Area: " << rec1.area() << endl;
//     cout << "Perimeter: " << rec1.perimeter() << endl;
//     return 0;
// }

// class Person {
//     private:
//         string name;
//         int age;
//         string country;
//     public:
//         void  setName(string n) {name = n;}
//         void  setAge(int a) {age = a;}
//         void  setCountry(string c) {country = c;}
//         string getName() const {return name;}
//         int getAge() const {return age;}
//         string getCountry() const {return country;}
// };

// int main() {
//     Person p;
//     p.setName("John");
//     p.setAge(25);
//     p.setCountry("USA");
//     cout << "Name: " << p.getName() << endl;
//     cout << "Age: " << p.getAge() << endl;
//     cout  << "Country: " << p.getCountry()<<endl;
// }

class Shape {
    public:
        virtual double calculateArea() const = 0;
        virtual double calculatePerimeter() const = 0;
};

class Circle: public Shape {
    private:
        double radius;
    public:
        Circle(double r):radius(r){}
        double calculateArea() const override {
            return M_PI * radius * radius;
        }
        double calculatePerimeter() const override {
            return 2 * M_PI * radius;
        }

};