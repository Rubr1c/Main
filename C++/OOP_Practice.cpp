#include <iostream>
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


class Stove{
    private:
        int temperature = 0;
    public:
        int getTemperature() {
            return temperature;
        }
};

int main() {
    Stove stove;
    return 0;
}
