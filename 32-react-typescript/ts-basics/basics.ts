// primitives: number, string, boolean
// more complex types: arrays, objects
// function types, parameters

// primitives

let age: number;

age = 12;

let userName: string;

userName = 'Pea';

let isInstructor: boolean;

isInstructor = false;

// more complex types
 
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: {
    name: string;
    age: number;
};

let person2: Person;

person = {
    name: 'Pea',
    age: 21,
};

// errors:
// person = {
//     isEmployee: true,
// }

let people: {
    name: string;
    age: number;
}[];

let people2: Person[];

// Type inference

let course: string = 'React - The Complete Guide';
// course = 12341; - still errors

let course2: string | number = 'React - The Complete Guide';
course2 = 12341;

// functions & types

function add(a: number, b: number): number { // no need to define return type but u can
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');


