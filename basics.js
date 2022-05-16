// Primitives: number, string, boolean
// Complex types: array, object
// Function types, parameters
////////////////////////////////////////////////
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
var course = 'React - The Complete Guide';
try {
    course = 123;
}
catch (e) {
    console.log(e.message);
}
