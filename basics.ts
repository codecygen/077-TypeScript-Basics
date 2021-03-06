// Primitives: number, string, boolean
// Complex types: array, object
// Function types, parameters
////////////////////////////////////////////////


// Primitives: number, string, boolean
let age: number;
age = 12;
let age2: number = 20;

let userName: string;
userName = 'Aras';

let isDeveloper: boolean;
isDeveloper = true;

// Complex types: array, object
let hobbies: string[];
hobbies = ['Programming', 'Chess'];

// Alternatively it can be written like that.
const hobbies2: Array<string> = ['Programming', 'Chess'];


let person: any;
person = {
    name: 'James',
    age: 30
}

let person2;
person2 = {
    name: 'Michael',
    age: 18
}

let person3: {
    name: string;
    age: number;
}
person3 = {
    name: 'Davis',
    age: 47
}

let personArray: {
    name: string;
    age: number;
}[]
personArray = [
    {
        name: 'Laura',
        age: 10
    },

    {
        name: 'Daniel',
        age: 45
    },
];

// Type inference
let course = 'React';
// TypeScript will assume that the variable
// is a String, so you cannot change it to a
// number. This is called "Type inference".
// course = 123;

let unionType: string | number | boolean = 'String value is hold in this var!';
unionType = false;

let arrayOfStrings: string[] = ['Aras', 'Sen'];

type typeAlias = {
    occupation: string;
    experience: number
};

let newDude: typeAlias;
let lottaDudes: typeAlias[];

// Function types, parameters
function add(a: number, b: number): number | string {
    return a + b;
};

// it has a void return type "function printOutput(value: any): void"
// if you hover over it on VS Code. It means that this function
// never returns anything.
function printOutput(value: any) {
    console.log(value);
};

// Generics
// <T> is for generic type only available in this function
// T stands for the fact that all arrays and return values
// should be having the same type. It helps to infer the values
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = ['1', '2', '3'];
const updatedArray = insertAtBeginning(demoArray, '5');
console.log(updatedArray);