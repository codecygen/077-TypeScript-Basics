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

let unionTypeVar: string | number | boolean = 'String value is hold in this var!';
unionTypeVar = false;

let arrayOfStrings: string[] = ['Aras', 'Sen'];