function timeForMilkAndCookies(date) {
	if (date.getDate() == 24 && date.getMonth() == 11) {
		return true;
	} else {
		return false
	}
}

function binary(decimal) {
    if (decimal == 0) {
        return '0';
    }
    let result = "";
	while (decimal != 0) {
        result += decimal % 2;
        decimal = Math.floor(decimal / 2);
    }
    return result.split('').reverse().join('');
}

function numberSquares(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += i * i;
    }
    return count;
}

function bitwiseAND(n1, n2) {
    return (n1 & n2);
}

function bitwiseOR(n1, n2) {
    return (n1 | n2);
}
 
function bitwiseXOR(n1, n2) {
    return (n1 ^ n2);
}

function largestSwap(num) {
	const stringNum = num.toString().split("").reverse().join("");
    if (Number(stringNum) <= num) {
        return true;
    } else {
        return false;
    }
}

function numInStr(arr) {
    const filteredArr = [];
	for (let lst of arr) {
        for (let str of lst) {
            if (!isNaN(parseInt(str))) {
                filteredArr.push(lst);
                break;
            }
        }
    }
    return filteredArr;
}

function zeroesToEnd(a) {
    const countOfZeros = a.filter(e => e === 0).length;
    const arr = a.filter(e => e != 0);
    for (let i = 0; i < countOfZeros; i++) {
        arr.push(0);
    }
    return arr;
}

function caesarCipher(s, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let ciphered = "";

    for (let char of s) {
        const isUpperCase = char.toUpperCase() === char;
        const index = alphabet.indexOf(char.toLowerCase());
        
        if (index === -1) {
            ciphered += char;
        } else {
            let shiftedIndex = (index + k) % alphabet.length;
            let shiftedChar = alphabet[shiftedIndex];
            if (isUpperCase) {
                shiftedChar = shiftedChar.toUpperCase();
            }
            ciphered += shiftedChar;
        }
    }

    return ciphered;
}

function direction(arr) {
    const finalArr = [];
    const east = "east";
    const west = "west";
    for (let str of arr) {
        let word = "";
        for (let char of str) {
            const lowerChar = char.toLowerCase();
            if (east.includes(lowerChar)) {
                if (lowerChar === char){
                    word += west[east.indexOf(lowerChar)];
                } else {
                    word += west[east.indexOf(lowerChar)].toUpperCase();
                }
            } else {
                word += char;
            }
        }
        finalArr.push(word);
    }
    return finalArr;
}

function detectWord(str) {
	let hiddenWord = "";
    for (let char of str) {
        if (char.toLowerCase() === char) {
            hiddenWord += char;
        }
    }
    return hiddenWord;
}

function toBinary(num) {
	return num.toString(2);
}

// let promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve("done");
//     }, 1000)
// })

function matchHouses(step) {
    let matches = 6;
	if (step === 0) {
        return 0;
    } 

    while (step > 1) {
        matches += 4;
    }
    return matches;
}

function sevenBoom(arr) {
    for (let element of arr) {
        for (let num of element.toString()) {
            if (num == 7) {
                return "Boom!";
            }
        }
    } 
    return "there is no 7 in the array";
}

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(other) {
// 		if(other.age < this.age) {
//             return `${other.name} is younger than me`
//         } else if (other.age > this.age) {
//             return `${other.name} is older than me`
//         } else {
//             return `${other.name} is the same age as me`
//         }
// 	}
// }

// const person1 = new Person("Ali", 18);
// const person2 = new Person("Hassan", 35);
// const person3 = new Person("Sara", 18);


function sortDrinkByPrice(drinks) {
	drinks.sort((a,b) => (a.price > b.price) ? 1 : -1);
    return drinks;
}

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
];

function hats(arr) {
    const numHats = arr[0];
    const speeds = arr[1];
    
    // Calculate the total time required for each production line to make numHats
    const totalTimes = speeds.map(speed => numHats * speed);
    
    // Find the maximum time among all production lines
    const maxTime = Math.max(...totalTimes);
    
    // Check if all production lines can finish numHats in the same time
    const isSameTime = totalTimes.every(time => time === maxTime);
    
    if (isSameTime) {
        // If all lines finish at the same time, return the time in minutes
        return `${maxTime} minutes`;
    } else {
        // If not all lines can finish at the same time, return "None"
        return "None";
    }
}

console.log(hats([3, [23, 11, 19, 9, 36]]));




