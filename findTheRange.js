// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution belοw:

// Given an array of numbers, write some code to loop 
// through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your 
// code should print out -4, 37.

let max = 0; 
let min = 0; 
for(let i=0; i<array.length; i++){ 
    console.log('Index:',i,'Array Value: ', array[i]);
    if(array[i] > max){
       max = array[i];  
    }
    else { 
       min = array[i]; 
    }
    console.log('Current max: ', max, 'Current min: ', min); 
    }
console.log(min, max); 
    //or could also do this
console.log(Math.min(...array), Math.max(...array)); 