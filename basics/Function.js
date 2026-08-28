// function name1() {
//     console.log("K");
//     console.log("A");
//     console.log("R");
//     console.log("T");
//     console.log("I");
//     console.log("K");
//     console.log("E");
//     console.log("Y");
// }

// name1()

// // function addTwoNumbers(num1, num2) {
// //     console.log(num1 + num2);
// // }
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result
//     // return num1 + num2;
// }

// let result = addTwoNumbers(5, 10);
// // console.log(result);   


// function loginUserMessage(user="sam") {
//     if(!user) {
//         return "Please log in to continue";
//     }
//     return `${user} just logged in`;
// }   

// console.log(loginUserMessage("Abhay")); 



function Calculatecartproduct(value1, value2,...rest) {
    return rest;
}

// console.log(Calculatecartproduct(100,122,2580,562,235))


const user = {
    name : "Abhay",
    age : 22   
}

function handleObject(anyObject){
       return `Username is ${anyObject.name} and age is ${anyObject.age}`
}

// console.log(handleObject(user))

// console.log(handleObject({
//     name: "Sam",
//     age: 52
// }))


const Array = [100,200,300,400,500]

function NewArray(AnyArray){
    return AnyArray[2]

}
console.log(NewArray(Array))