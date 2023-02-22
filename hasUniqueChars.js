// Write your code below
//create for loop for if then statement, to read each character and compare it with other characters. 

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str.charAt(i) === str.charAt(j)){
                return false;
            }else{
                return true;
            }
        }
    }
}

console.log(hasUniqueChars("Fife"));