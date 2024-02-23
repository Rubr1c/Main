#include <iostream>
using namespace std;
#include <string.h>
#include <string>
#include <algorithm>
#include <vector>

// int main() {
//   cout << "Hello World! \n\n";
//   cout << "I am learning C++";
//   return 0;
// }


// int main() {
//   int x, y;
//   int sum;
//   cout << "Type a number: ";
//   cin >> x;
//   cout << "Type another number: ";
//   cin >> y;
//   sum = x + y;
//   cout << "Sum is: " << sum;
// }


// int main()  {
//     char a = 65, b = 66, c = 67;
//     cout << a;
//     cout << b;
//     cout << c;
// }


// int main() {
//     string greeting = "Hello";
//     cout << greeting;
// }


// int main() {
//     string firstName = "John ";
//     string lastName = "Doe";
//     string fullName = firstName.append(lastName);
//     cout << fullName;
// }


// int main() {
//     string firstName;
//     cout << "Type your first name: ";
//     cin >> firstName; 
//     cout << "Your name is: " << firstName;
// }

// int main() {
//     int day = 4;
//     switch (day) {
//         case 1:
//             cout << "Monday";
//             break;
//         case 2:
//             cout << "Tuesday";
//             break;
//         case 3:
//             cout << "Wednesday";
//             break;
//         case 4:
//             cout << "Thursday";
//             break;
//         case 5:
//             cout << "Friday";
//             break;
//         case 6:
//             cout << "Saturday";
//             break;
//         case 7:
//             cout << "Sunday";
//         break;
// }
// }


// int sum(int k) {
//   if (k > 0) {
//     return k + sum(k - 1);
//   } else {
//     return 0;
//   }
// }

// int main() {
//   int result = sum(3);
//   cout << result;
//   return 0;
// }


// int max(int x, int y) {
//     if (x > y) {
//         return x;
//     } else if (y > x) {
//         return y;
//     } else {
//         return x;
//     }
// }

// int main() {
//     cout << max(20, 17);

// }


// int fact(int n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n * fact(n - 1);
//     }
// }

// int main() {
//     cout << fact(6);

// }


// string greet(string name) {
//     return "Hello, " + name;
// }

// int main() {
//     string x;
//     cin >> x;
//     cout << greet(x);
// }

// string reverse(string s) {
//     if (s.length() == 0) {
//         return "";
//     } else {
//         return s.substr(s.length() - 1) + reverse(s.substr(0, s.length() - 1));
//     }
// }

// int main() {
//     string x;
//     cin >> x;
//     cout << reverse(x);
// }


// string cap(string x) {
//     string y[];
//     for (int i = 0; i < x.length(); i++) {
//         if (x[i] != " ") {
//             replace(y.begin(), y.end(), y[0], y[0] + x[i]);
//         }
//     return y;
//     }

// }

// int main() {
//     string x;
//     cin >> x;
//     cout << cap(x);
// }


// void mulWord(string s, int n) {
//     for (int i = 0; n > 0; i++) {
//         cout << s << " ";
//         n--;
//     }
// }

// int main() {
//     string x;
//     int y;
//     cin >> x;
//     cin >> y;
//     mulWord(x, y);
// }


// int fibo(int n, vector<int> arr = {0, 1}) {
//     if (n < 2) {
//         return arr.back();
//     } else {
//         int sum = arr[arr.size() - 1] + arr[arr.size() - 2];
//         arr.push_back(sum);
//         return fibo(n - 1, arr);
//     }
// }

// int main() {
//     int x;
//     cin >> x;
//     cout << fibo(x);
//     return 0;
// }


// bool isPrime(int n, int d = 2) {
//     bool x = false;
//     if (d >= n) {
//         x = true;
//     } else if (n%d != 0) {
//         x = isPrime(n, d + 1);
//     } else {
//         x = false;
//     }
//     return x;
// }

// int main() {
//     int x;
//     cin >> x;
//     cout << isPrime(x);
//     return 0;
// }


// int factorial(int n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// int main() {
//     int x = 6;
//     cout << factorial(x);
//     return 0;
// }


// bool isPalindrome(int n) {
//     string stringofn = to_string(n);
//     if (stringofn.length() <= 1) {
//         return true;
//     } else if (stringofn[0] == stringofn[stringofn.length() - 1]) {
//         return isPalindrome(stoi(stringofn.substr(1, stringofn.length() - 2)));
//     } else {
//         return false;
//     }
    
// }

// int main() {
//     int x = 676;
//     cout << isPalindrome(x);
//     return 0;
// }


// int min(vector<int> arr) {
//     int out = 100000;
//     for (int i = 0; i <= arr.size(); i++){
//         if (arr[i] < out) {
//             out = arr[i];
//         }
//     }
//     return out;
// }

// int main() {
//     vector<int> x = {(-2), 5, 1, 65};
//     cout << min(x);
//     return 0;
// }


// void lens(vector<string> arr) {
//     vector<int> x;
//     for (int i = 0; i < arr.size(); i++) {
//         cout << arr[i].size() << " ";
//     }
// }

// int main() {
//     vector<string> x = {"How", "is", "it", "you"};  
//     lens(x);
//     return 0;
// }


// void alternate(vector<int> a1, vector<int> a2) {
//     for (int i = 0; i < a1.size(); i++) {
//         cout << a1[i] << " " << a2[i] << " ";
//     }
// }

// int main() {
//     vector<int> x = {1, 2, 3};
//     vector<int> y = {4, 5, 6};
//     alternate(x, y);
//     return 0;
// }


// int findIndex(string s, char c) {
//     if (s[0] == c) {
//         return 0;
//     } else {
//         return 1 + findIndex(s.substr(1), c);
//     }
// }

// int main() {
//     string x = "example";
//     char y = 'z';
//     cout << findIndex(x, y);
//     return 0;
// }


void selectionSort(vector<int>& x) {
     for (int i = 0; i < x.size(); i++) {
          auto minValue = min_element(x.begin() + i, x.end());
          swap(x[i], *minValue);
     }
     for (int i = 0; i < x.size(); i++) {
          cout << x[i] << " ";
     }
     cout << endl;

}

void insertionSort(vector<int>& x) {
     for (int i = 0; i < x.size() - 1; i++) {
          int pointer = x[i];
          int stop = i - 1;
          while (stop >= 0 && pointer < x[stop]) {
               x[stop + 1] = x[stop];
               stop--;
          }
          x[stop + 1] = pointer;
     }
     for (int i = 0; i < x.size(); i++) {
          cout << x[i] << " ";
     }
}


int main() {
     vector<int> x = {78, 91, 29, 7, 91, 6, 93};
     selectionSort(x);
     insertionSort(x);

}

