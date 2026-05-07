function filterEvenNumbers(nums: number[]): number[] {
    const evenNums: number[] = [];

    nums.forEach((num) => {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    });

    return evenNums;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);


function reverseString(input: string): string {
    const charsArray: string[] = input.split("");
    const reversedArray: string[] = charsArray.reverse();
    const reversedString: string = reversedArray.join("");
    return reversedString;
}

reverseString("typescript");


function checkType(value: string | number): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

checkType("Node");
checkType(24.15);


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21
};

getProperty(user, "age");


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isRead?: boolean;
}

function toggleReadStatus(book: Book): Book {
    return {
        ...book,
        isRead: true
    };
}

const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};

toggleReadStatus(myBook);


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");


function getIntersection(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];

    arr1.forEach((num) => {
        if (arr2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    });

    return result;
}

const output = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

