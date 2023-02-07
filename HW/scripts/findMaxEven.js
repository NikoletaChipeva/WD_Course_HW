// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// TEST

let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = 0;


function findMaxEven () {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]>max && numbers[i]%2===0) {
            max=numbers[i];
        }
    }
};

findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);