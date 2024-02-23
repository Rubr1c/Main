#include <iostream>
using namespace std;

class Student{
	public:
		string name;
		int age;
		double gpa;
	Student(string name, int age, double gpa){
		this->name = name;
		this->age = age;
		this->gpa = gpa;
	}
};

int main() {

	Student student1("Rubric", 18, 3.7);

	cout << student1.name;

    return 0;
}
