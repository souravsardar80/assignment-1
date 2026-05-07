"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenNumbers(nums) {
    const evenNums = [];
    nums.forEach((num) => {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    });
    return evenNums;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
function reverseString(input) {
    const charsArray = input.split("");
    const reversedArray = charsArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
}
reverseString('typescript');
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}
checkType("Node");
checkType(24.15);
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
getProperty(user, "age");
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true
    };
}
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};
toggleReadStatus(myBook);
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
function getIntersection(arr1, arr2) {
    const result = [];
    arr1.forEach((num) => {
        if (arr2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    });
    return result;
}
const output = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(output);
//# sourceMappingURL=solutions.js.map