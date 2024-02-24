#include <iostream>
#include <string>

using namespace std;

int countWords(const string& str) {
    int count = 0;
    for (char c : str) {
        if (c == ' ') {
        count++;
        }
    }
    return count + 1;
}
int main() {
    string input;
    cout << "Enter a string: ";
    getline(cin, input);
    int wordCount = countWords(input);
    cout << "The number of words in the string is: " << wordCount << endl;
    return 0;
}