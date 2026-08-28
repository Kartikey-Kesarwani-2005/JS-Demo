const user = {
    username: "Abhay",
    price: 2569,

    WelcomeMessage: function(){
        console.log(`${this.username},  Welcome to the Website`);
        console.log(this);
    }

}
// user.WelcomeMessage()
// user.username = "Sam";
// user.WelcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Vaibhav";
//     console.log(this.username);
// }

// chai();



// const addTwo = (num1,num2) => {
//     return num1+num2; 
// }

// const addTwo = (num1,num2) => num1+num2; 
const addTwo = (num1,num2) => (num1+num2); 

console.log(addTwo(3,5));