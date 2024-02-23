#include <iostream>

using namespace std;

/*In an imaginary land when people come face to face they teleport through each other


So, they can go left and right without moving. When a person whose facing right comes to a person whose facing left they teleport.


Your task is to calculate how many teleports are going to happen if we know the number of people on the street.


Challenge

Hard
In the first line is given a number N. In the next N lines is either a 1 (if the person is facing right), or a 2 (if the person is facing left). Output the number of teleports that are going to happen for the given sequence.
*/
int teleport(int num) {
    int arr[num];
    int count = 0;
    for (int i = 0; i < num; i++) {
        cin >> arr[i];
    }
    for (int i = 0; i < num - 1; i++) {
        if (arr[i] == 1 && arr[i + 1] == 2) {
            count++;
            swap(arr[i], arr[i + 1]);
            i = 0;
        }
    }
    return count;
}

int main()
{
    // Enter your code here
    int x;
    cin >> x;
    cout << teleport(x);

    return 0;
}