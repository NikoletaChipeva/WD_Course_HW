//TASK: Separate array elements in new arrays

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];


for (let i=0; i<numbersArr.length; i++) {
   
    if ((numbersArr[i]%2)===0){
        evenNums.push(numbersArr[i]);
    }
    else {
        oddNums.push(numbersArr[i]);
    }
}

console.log("numbersArr:",numbersArr);
console.log("evenNums:",evenNums);
console.log("oddNums:",oddNums);

