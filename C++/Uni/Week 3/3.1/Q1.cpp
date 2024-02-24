#include<iostream>
using namespace std;


int CountDivBy7(int num) {
    int counter = 0;
    for (int i = 1; i < num; i++) {
        if (i % 7 == 0)
        counter++;
    }
    return counter;
}

int main() {
    int number;
    cout << "please enter a postive number: ";
    cin >> number;
    while (number < 0) {
        cout << "please enter a positive number: ";
        cin >> number;
    }
    cout << CountDivBy7(number);
}
