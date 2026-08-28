//object Literal

// const sym = Symbol('uniqueIdentifier');

// const user = {
//   name: 'John Doe',
//   "full name" :  "Abhay Raj",
//   age: 30,
//   [sym]: "mySymbol",
//   email: 'john.doe@example.com'
// };

// // console.log(user.email);
// // console.log(user['email']);
// // console.log(user.name);
// // // console.log(user.full name); // This will not work because of the space in the property name
// // console.log(user['full name']); // This will work because of the square bracket notation
// // console.log(user[sym]); // This will work because sym is a symbol and not a string


// //user.email = "Kesari@gmailcom"; // updating the value of email property
// // console.log(user); 
// //Object.freeze(user); // freezing the object so that no changes can be made to it
// //user.email = "Kesari512@gmailcom";
// // console.log(user); 


// user.greeting = function() {
//     console.log("Hello Users");
// }

// user.greeting1 = function() {
//     console.log(`Hello Users  ${this.name}`);
// }
// console.log(user.greeting()); 
// console.log(user.greeting1()); 




// object singleton


// const tinderuser = new Object();
const tinderuser = {}

tinderuser.name = "Abhay";
tinderuser.age = 22;
tinderuser.loggedIn = true;

// console.log(tinderuser);

const regularuser = {
    email: "Abhay@gmail.com",
    username: {
        fullname: {
            firstname: "Abhay",
            lastname: "Raj"
        }
    }
}
// console.log(regularuser.username.fullname.lastname);


const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}
//const obj3 ={obj1, obj2}   // it merges two objects and returns a new object
// const obj3 = Object.assign({}, obj1, obj2);   // it merges two objects and returns a new object
const obj3 = {...obj1, ...obj2};   // it merges two objects and returns a new object
// console.log(obj3);


// console.log(Object.keys(tinderuser));   // it returns an array of keys of the object
// console.log(Object.values(tinderuser));   // it returns an array of values of the object                
// console.log(Object.entries(tinderuser));   // it returns an array of key-value pairs of the object
// console.log(tinderuser.hasOwnProperty("name"));   // it checks whether the object has the specified property or not


const course = {
        name: "JavaScript", 
        id: 123,
        price: 299
}

// console.log(course.name);   // it returns the value of the specified property
const {name:n}=course;   // it destructures the object and assigns the value of the specified property to the variable
console.log(n);   // it returns the value of the specified property
