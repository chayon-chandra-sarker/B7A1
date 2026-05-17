//No 01 Solution
function filterEvenNumbers (numbers: number[]): number[] {
    return numbers.filter(evenNumber => evenNumber % 2 === 0);
};

const evenNum = filterEvenNumbers([1,2,3,4,5,6,7])
evenNum;


//No 02 Solution
function reverseString (text:string): string {
    return text.split("").reverse().join("");
}
const reverseResult = reverseString("chayon")
reverseResult;


//No 03 Solution
type StringOrNumber = string | number
const checkType =(text: StringOrNumber): string => {
 if(typeof text === "number"){
     return "Number"
   }else{
    return "String"
   }
}
const checkTypeResult1 = checkType("Hello");
const checkTypeResult2 = checkType(42);
[checkTypeResult1, checkTypeResult2];

//No 04 Solution
function getProperty <T, K extends keyof T>(object: T, key: K):T [K] {
    return object[key];
}
 const person = {
    id:1,
    name:"John Doe",
    age: 21,
 }
const idValue = getProperty(person, "id");
const nameValue = getProperty(person, "name");
const ageValue = getProperty(person, "age");

[idValue , nameValue, ageValue];

//No 05 Solution
interface Book {
    title : string;
    author: string;
    publishedYear: number;
};
function toggleReadStatus (book:Book): Book & {isRead: boolean}{
    return{
        ...book,
        isRead:true,
    }
}
const myBook = {
     title: "TypeScript Guide", 
     author: "Jane Doe", 
     publishedYear: 2024
}
const myBookResult = toggleReadStatus(myBook)
myBookResult;

//No 06 Solution
class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name:string, age:number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;

    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();


//No 07 Solution
function getIntersection (arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.includes(num));
}
const getIntersectionResult = getIntersection(
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7]
);
getIntersectionResult;