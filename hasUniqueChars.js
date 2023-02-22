// Write your code below
//create for loop for if then statement, to read each character and compare it with other characters. 

// function hasUniqueChars(str){
//     for(let i = 0; i < str.length; i++){
//         for(let j = i + 1; j < str.length; j++){
//             if (str.charAt(i) === str.charAt(j)){
//                 return false;
//             }else{
//                 return true;
//             }
//         }
//     }
// }

// console.log(hasUniqueChars("Fife"));

//Or
//Answer walk-through

// for (let i = 0; i < str.length; i++){
//     let curChar = str[i];
//     for(let j = 0; k < str.length; k++){
//         let compareChar = str[k];
//         if(i !== k && compareChar === curChar) {
//             return false
//         }
//     }
// }

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

//OR

//Use a set! They're like arrays, but all their values have to be unique.

// function hasUniqueChars(str) {
//     // let arr = [1,1,2,3]; The set will take out the repeats and will have a different number of characters.
//     let mySet = new Set(str);
//     if(str.length === mySet.size){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

//OR to do this in one line:

function hasUniqueChars = (str) => (new Set(str)).size < str.length ? false : true;

console.log(hasUniqueChars("Monday"));