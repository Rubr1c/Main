
function countStudents(students, sandwiches) {
    let count = 0;
    while (students.length > 0 && count < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            count = 0;
        } else {
            students.push(students.shift());
            count++;
        }
    }
    return students.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); 