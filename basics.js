// Primitives: number, string, boolean
// Complex types: array, object
// Function types, parameters
////////////////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives: number, string, boolean
var age;
age = 12;
var age2 = 20;
var userName;
userName = 'Aras';
var isDeveloper;
isDeveloper = true;
// Complex types: array, object
var hobbies;
hobbies = ['Programming', 'Chess'];
// Alternatively it can be written like that.
var hobbies2 = ['Programming', 'Chess'];
var person;
person = {
    name: 'James',
    age: 30
};
var person2;
person2 = {
    name: 'Michael',
    age: 18
};
var person3;
person3 = {
    name: 'Davis',
    age: 47
};
var personArray;
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
var course = 'React';
// TypeScript will assume that the variable
// is a String, so you cannot change it to a
// number. This is called "Type inference".
// course = 123;
var unionType = 'String value is hold in this var!';
unionType = false;
var arrayOfStrings = ['Aras', 'Sen'];
var newDude;
var lottaDudes;
// Function types, parameters
function add(a, b) {
    return a + b;
}
;
// it has a void return type "function printOutput(value: any): void"
// if you hover over it on VS Code. It means that this function
// never returns anything.
function printOutput(value) {
    console.log(value);
}
;
// Generics
// <T> is for generic type only available in this function
// T stands for the fact that all arrays and return values
// should be having the same type. It helps to infer the values
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
;
var demoArray = ['1', '2', '3'];
var updatedArray = insertAtBeginning(demoArray, '5');
console.log(updatedArray);
