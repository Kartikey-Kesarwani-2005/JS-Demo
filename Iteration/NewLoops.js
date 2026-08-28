// const arr = [1,2,0,5,6,8,9,7]
// for (const A of arr) {
//     console.log(A);
// }


const greeting = "Hello World";
for (const b of greeting) {
    // console.log(b);
} 


/// Maps
const map = new Map();
map.set("IN","India");
map.set("RU","Russia");
map.set("FR","France");
// console.log(map);
for (const [key,value] of map) {
    //console.log(key, ":-", value);
}



const myobj = {
    js: "JAVA SCRIPT",
    cpp: "C++",
    db: "DATA BASE",
    CS: "C SHARPH"
}
// for (const key of myobj) {   // in (for of) case object was not working
//     console.log(key)
// }
for (const key in myobj) {
    // console.log(key)   for only key 
    // console.log(myobj[key])   for  all keys values 
}
const programming = ["JS","CPP","PY","C"]
for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
}



const coding = ["C","JAVA","CPP","PYTHON","C#"]
// coding.forEach(function (val) {
//     console.log(val)
// });

// coding.forEach( (item) =>
// {
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item,index,value) => {
//     console.log(item,index,value);
// })


const mycoding = [
    {
        languagename: "JavaScript",
        languageFilename: "js"
    },
    {
        languagename: "Python",
        languageFilename: "py"
    },
    {
        languagename: "Java",
        languageFilename: "Java"

    }
]
// mycoding.forEach((item) => {
//     console.log(item.languageFilename);
// })





/// Filter
const Nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = Nums.filter( (num) => num>5)
const newNums = Nums.filter((num) => {
   return num>4
    
})
// console.log(newNums)



const books = [
  { title: "To Kill a Mockingbird", genre: "Classic Fiction", publisher: "J.B. Lippincott & Co.", edition: "1st Edition" },
  { title: "Pride and Prejudice", genre: "Classic Fiction", publisher: "T. Egerton", edition: "1st Edition" },
  { title: "1984", genre: "Dystopian Fiction", publisher: "Secker & Warburg", edition: "1st Edition" },
  { title: "Brave New World", genre: "Dystopian Fiction", publisher: "Chatto & Windus", edition: "1st Edition" },
  { title: "Harry Potter and the Sorcerer’s Stone", genre: "Fantasy", publisher: "Bloomsbury / Scholastic", edition: "1st Edition" },
  { title: "The Hobbit", genre: "Fantasy", publisher: "George Allen & Unwin", edition: "1st Edition" },
  { title: "The Lord of the Rings", genre: "Fantasy", publisher: "George Allen & Unwin", edition: "2nd Edition" },
  { title: "The Catcher in the Rye", genre: "Coming-of-Age", publisher: "Little, Brown and Company", edition: "1st Edition" },
  { title: "The Alchemist", genre: "Philosophical Fiction", publisher: "HarperOne", edition: "25th Anniversary Edition" },
  { title: "The Da Vinci Code", genre: "Thriller / Mystery", publisher: "Doubleday", edition: "1st Edition" }
];

//  let userbook = books.filter((bk) => bk.edition === "1st Edition")
let userbook = books.filter((bk) =>  {
 return bk.genre === "Dystopian Fiction" && bk.edition === "1st Edition"
} 
)
//  console.log(userbook)



/// Map

const numbers =[1,2,3,4,5,6,7]
// const newNumbers = numbers.map((num) => num+1)
const newNumbers = numbers
         .map((num) => num*10)
         .map((num) => num+1)
         .filter((num) => num>=50)
// console.log(newNumbers)


// reduce

const num = [1,2,3,4,5]
// const sum = num.reduce(function(acc , cr)
// { 
//     console.log(`Acc Value ${acc} and Crre. value is ${cr}`)
//     return acc+cr
// },0)
const sum = num.reduce((acc,cr) => acc+cr,0)
// console.log(sum)



const shoppingCart = [
  { name: "Laptop", price: 55000 },
  { name: "Smartphone", price: 25000 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Backpack", price: 1200 },
  { name: "Smartwatch", price: 7000 },
  { name: "Book", price: 500 },
  { name: "Shoes", price: 3000 },
  { name: "Water Bottle", price: 400 }
];
const bill = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(bill)