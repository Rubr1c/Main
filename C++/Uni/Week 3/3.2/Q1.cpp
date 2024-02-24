#include <iostream> // Including the Input/Output Stream Library
#include <string> // Including the String Library

int main() {
    // Dynamically allocate an array of integers
    int size = 7; // Size of the array
    int* dynamicIntArray = new int[size]; // Allocating memory for an integer array of 'size' elements
    // Initialize the elements of the integer array
    for (int i = 0; i < size; i++) {
        dynamicIntArray[i] = i + 1; // Setting values in the dynamically allocated integer array
    }
    // Dynamically allocate an array of strings
    std::string* dynamicStringArray = new std::string[size]; // Allocating memory for a string array of 'size' elements
    // Initialize the elements of the string array
    for (int i = 0; i < size; i++) {
    dynamicStringArray[i] = "Element-" + std::to_string(i + 1); // Setting values in the dynamically allocated string array
    }
    // Display the elements of the dynamically allocated integer array
    std::cout << "Dynamically allocated integer array:" << std::endl;
    for (int i = 0; i < size; i++) {
        std::cout << dynamicIntArray[i] << " "; // Outputting each element of the dynamically allocated integer array
    }
    std::cout << std::endl;
    // Display the elements of the dynamically allocated string array
    std::cout << "\nDynamically allocated string array:" << std::endl;
    for (int i = 0; i < size; i++) {
        std::cout << dynamicStringArray[i] << std::endl; // Outputting each element of the dynamically allocated string array
    }
    // Deallocate the memory allocated for both arrays
    delete[] dynamicIntArray; // Deallocating memory for the dynamically allocated integer array
    delete[] dynamicStringArray; // Deallocating memory for the dynamically allocated string array
    return 0; 
}