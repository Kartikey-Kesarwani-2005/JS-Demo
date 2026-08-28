// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// const arr1 = ["Saktiman", "Kathmandu", "Nepal"];
// console.log(arr1);
// const arr2 = [1, "Saktiman", true, null, undefined];
// console.log(arr2);

// const arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr3[0]);
// console.log(arr3.unshift(0,5));
// console.log(arr3);
// arr3.push(6,7);
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// arr3.shift();
// console.log(arr3);  
// console.log(arr3.includes(9));
// console.log(arr3.indexOf(5));
// console.log(arr3);
// const arr4 = arr3.join();   // it converts array into string
// console.log(arr4);  
// console.log("original array: " , arr3);
// const arr5 = arr3.slice(1, 4);      
// console.log("sliced array: " ,arr5);
// const arr6 = arr3.splice(1,4);   // it removes the elements from the original array and returns the removed elements
// console.log("spliced array: " ,arr6);

// const arr = ["Abhay", "Saktiman", "Kathmandu", "Nepal"];
// console.log(arr);
// const arr1 = ["Suman", "Pokhara", "Nepal"];
// console.log(arr1);
// arr.push(arr1);
// console.log(arr);
// const arr2 = arr.concat(arr1);   // it merges two arrays and returns a new array
// console.log(arr2);
// const arr3 = [...arr, ...arr1];   // it merges two arrays and returns a new array
// console.log(arr3);


// const new_array = [1, 2, 3,[4,5],6,7,[8,9,[10,11]]];
// console.log(new_array);
// const flat_array = new_array.flat(Infinity);   // it flattens the array upto the specified depth
// console.log(flat_array);

// console.log(Array.isArray("Kartikey"));   // it checks whether the given value is an array or not
// console.log(Array.from("Kartikey"));   // it converts the given value into an array
// console.log(Array.from({name: "Kartikey"})); // it converts the given object into an array

let score1 = 1200;
let score2 = 1500;
let score3 = 1800;  

console.log(Array.of(score1, score2, score3));