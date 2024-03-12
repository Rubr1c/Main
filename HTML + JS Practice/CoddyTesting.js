function validateCard(cardNumber) {
    // Write your code below this line
    let stringNumber = String(cardNumber);
    let half1 = [];
    let half2 = [];
    if (stringNumber.length % 2 == 0) {
        for (let i = 0; i < stringNumber.length; i += 2) {
            half1.push(stringNumber[i])
            half2.push(stringNumber[i + 1])
        }
    } else {
        for (let i = 1; i < stringNumber.length; i += 2) {
            half1.push(stringNumber[i])
            half2.push(stringNumber[i - 1])
        }
    }
    let sum = 0;
    const doubledArray = half1.map(element => 2 * Number(element));
    const doubledSplit = doubledArray.join("");
    const doubledArraySplit = doubledSplit.split("");
    doubledArraySplit.forEach(element => sum += Number(element));
    let finalSum = sum;
    half2.forEach(element => finalSum += Number(element));
    let valid = false;
    if (finalSum%10 === 0) {
        valid = true;
    }
    if (valid && stringNumber.length === 15 && ((stringNumber[0] == 3 && stringNumber[1] == 4) || (stringNumber[0] == 3 && stringNumber[1] == 7))) {
        console.log("AMEX");
    } else if (valid && stringNumber.length === 16 && stringNumber[0] == 5) {
        console.log("MASTERCARD");
    } else {
        console.log("INVALID");
    }
}

function substitution(key, message) {
    const check = message.toLowerCase();
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
    for (let i = 0; i < message.length; i++) {
        if (alpha.includes(check[i])) {
            let letterIndex = alpha.indexOf(check[i]);
            if (message[i].toUpperCase() === message[i]) {
                encrypted += key[letterIndex];
            } else {
                encrypted += key[letterIndex].toLowerCase();
            }
        } else {
            encrypted += message[i];
        }
    }
    console.log(encrypted);
}

function findMissingNumber(arr) {
    // write your code below
    let sum = 0;
    arr.forEach(element => sum += element);
    let sum2 = 0;
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        sum2 += i;
    }

    let missing = sum2 - sum;
    if (missing === 0) {
        return arr[arr.length - 1] + 1;
    } else {
        return missing;
    }
}

function titleCase(sentence) {
    // write your code below   
    let finalArr = [];
    const splitArr = sentence.split(" ");
    for (let word of splitArr) {
        const firstLetter = word[0]
        finalArr.push(firstLetter.toUpperCase() + word.substring(1));
    }
    return finalArr.join(" ");
}

function areAnagrams(str1, str2) {
    // write your code below
    const sortedStr1 = str1.split("").sort().join("");;  
    const sortedStr2 = str2.split("").sort().join("");;  
    if (sortedStr1 == sortedStr2) {
        return true;
    } else {
        return false;
    }
}

function reverseWords(sentence) {
    // write your code below
    const splitSentence = sentence.split(" ");
    if (splitSentence.length <= 1) {
        return sentence;
    } else {
        const subarr = splitSentence.slice(0, splitSentence.length - 1);
        return splitSentence[splitSentence.length - 1] + " " + reverseWords(subarr.join(" "))
    }
    
}

function isPrime(num) {
    // write your code below
    for (let i = 2; i < num; i++){
        if (num%i == 0) {
            return false;
        }
    }
    return true;
}

function mergeSortedArrays(arr1, arr2) {
    // write your code below
    const sortedArry = arr1;
    arr2.forEach(element => sortedArry.push(element));
    sortedArry.sort();
    return sortedArry;
}

function palidrome(str) {
    if (str.length < 2) {
        return true
    } else if (str[0] == str[str.length - 1]) {
        return palidrome(str.substring(1, str.length - 1))
    } else {
        return false;
    }
}

function countPalindromes(str) {
    // write your code below
    let count = str.length;
    let j = 0;
    let i = 2;
    let jump = 2;
    while (jump <= str.length) {
        if (i <= str.length) {
            if (palidrome(str.substring(j, i))) {
                count++;
                j++;
                i++;
            } else {
                j++;
                i++;
            }
        } else {
            jump++;
            i = jump;
            j = 0;
        }
    }
    return count;
}

function rotateArray(steps, arr) {
    // write your code below
    let shiftedArray = [...arr];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i + steps > arr.length - 1) {
            shiftedArray[j] = arr[i];
            j++;
        } else {
            shiftedArray[i + steps] = arr[i];
        }
    }
    return shiftedArray;
    
}

function arrayIntersection(arr1, arr2) {
    // write your code below
    const arr3 = arr1.filter(element => arr2.includes(element));
    return arr3;
    
}

function fibonacciIterative(n) {
    // write your code below
    let n1 = 0;
    let n2 = 1;
    for (let i = 1; i < n; i++) {
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n2;
}

function findMedianSortedArrays(nums1, nums2) {
    // write your code below 
    let sum = 0;
    nums1.forEach(element => sum += element);
    nums2.forEach(element => sum += element);
    let len = nums1.length + nums2.length
    return sum/len
}

function gcd(a, b) {
    // write your code below
    for (let i = Math.min(a, b); i > 0; i--) {
        if (a%i === 0 && b%i === 0) {
            return i;
        }
    }
}

function fizzBuzz(n) {
    // write your code below
    let arrNum = [];
    let finalStr = "";
    for (let i = 1; i <= n; i++) {
        arrNum.push(i);
    }
    arrNum.forEach(element => {
        if (element%3 == 0 && element%5 == 0) {
            finalStr += "FizzBuzz ";
        } else if (element%3 == 0) {
            finalStr += "Fizz ";
        } else if (element%5 == 0) {
            finalStr += "Buzz ";
        } else {
            finalStr += String(element) + " ";
        }
    })
    return finalStr;
}

function twoSum(arr, target) {
    // write your code below 
    const filteredArr = arr.filter(element => element < target)
    let arrSum = [];
    for (let i = 0; i < filteredArr.length; i++) {
        for (let j = i + 1; j < filteredArr.length; j++) {
          if (arr[i] + arr[j] == target) {
            arrSum.push(i, j);
          }
        }
    }
    return arrSum;
}

function atSymbolIndex(str) {
    return str.indexOf("@");
}

function dotIndex(str) {
    return str.indexOf(".");
}

function includesdot(str) {
    return str.includes(".");
}

function includesAtSymbol(str) {
    return str.includes("@");
}

function isValidEmail(email) {
    if (includesdot(email) && includesAtSymbol(email) && atSymbolIndex(email) < dotIndex(email)) {
        return true;
    } else {
        return false;
    }
}

function countCharacters(str) {
    // write your code below
    let countLett = {};
    for (let char of str) {
        if (char in countLett) {
            countLett[char]++;
        } else {
            countLett[char] = 1;
        }
    }
    return countLett;
}

function reverseInteger(num) {
    // write your code below 
    const strNum = String(num);
    let revNum = strNum.split('').reverse().join('');
    return Number(revNum);
}

function subarraySum(nums, k) {
    // write your code below
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            let sum = 0;
            let subArray = nums.slice(i, j);
            subArray.forEach(element => sum += element);
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
}

function largestRectangleArea(heights) {
    // write your code below 
    const maxHeight = Math.max(...heights);
    const indexOfMax = heights.indexOf(maxHeight);
    let highestNext = 0;
    let numOfRec = 2;
    if (heights[indexOfMax + 1] > heights[indexOfMax - 1]) {
        highestNext = indexOfMax + 1;
    } else {
        highestNext = indexOfMax - 1;
    } 
    if (highestNext == 0) {
        numOfRec = 1;
        highestNext = indexOfMax;
    } 
    let area = numOfRec * heights[highestNext];
    return area;
}

function lcp(a) {
    // Write code here
    
    let firstLetter = a[0].charAt(0);
    let allSame = a.every(word => word.charAt(0) === firstLetter);
    if (!allSame) {
        return "";
    } else {
        let result = a.map(word => word.slice(1));
        return a[0][0] + lcp(result)
    }
}

function merge(a1, a2) {
    // Write code here
    if (a1.length === 0 && a2.length === 0) {
        return [];
    } else {
        const minElem1 = Math.min(...a1);
        const minElem2 = Math.min(...a2);
        if (minElem1 < minElem2) {
            a1 = a1.filter(item => item !== minElem1);
            return [minElem1].concat(merge(a1, a2)); // Concatenate the arrays returned by recursive calls
        } else {
            a2 = a2.filter(item => item !== minElem2);
            return [minElem2].concat(merge(a1, a2)); // Concatenate the arrays returned by recursive calls
        }
    }
}

function findIndex(s, c, index = 0) {
    // Write code here
    if (s.length === 0) {
        return -1;
    } else if (s[0] === c) {
        return index
    } else {
        index++;
        return findIndex(s.substring(1));
    }
}

function knapsack(W, values, weights) {
    // Write code here
    
    
}

function kpairs(nums, k) {
    let arrOfCounts = [];
    let countOfOps;
    for (let i = 0; i < nums.length; i++) {
        countOfOps = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j === i){
                continue
            } else {
                const sum = nums[i] + nums[j];
                if (sum === k) {
                    countOfOps++;
                }
            }
        }
        arrOfCounts.push(countOfOps);
    }
    return Math.max(...arrOfCounts);
}

function findMaxAverage(nums, k) {
    let j = k;
    let arrOfAvg = [];
    if (nums.length == 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length - k + 1; i++) {
        const newArr = nums.slice(i, j);
        const sum = newArr.reduce((total, currentValue) => total + currentValue, 0);
        const avg = sum / k;
        arrOfAvg.push(avg);
        j++;
    }
    return Math.max(...arrOfAvg);
}

function isSubset(a1, a2, n, m){
    let count = 0;
    for (const num of a1) {
        if (!a2.includes(num) || a1.count(num) > a2.count(num)) {
            a1.splice(a1.indexOf(num), 1);
        }
    }
    if (m === count) {
        return "Yes";
    } else {
        return "No";
    }
}

function mergeSort(a1, a2) {
    const sortedArr = [];
    for (const num of a1) {
        while (num >= a2[0]) {
            sortedArr.push(a2[0]);
            a2.shift();
        }
        sortedArr.push(num);
    }
    const sortedArrFinal = sortedArr.concat(a2);
    return sortedArrFinal;
}

function isAlmostPalindrome(s) {
    if (s.split('').reverse().join('') === s) {
        return true;
    } else {
        let count = 0;
        for (let i = 0; i < s.length / 2; i++) {
            if (s[i] === s[s.length - 1 - i]) {
                count++;
            }
        }
        const match = parseInt(s.length / 2);
        if (count === match) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isAlmostPalindrome("racebar"));



