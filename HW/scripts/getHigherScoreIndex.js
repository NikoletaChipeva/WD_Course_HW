let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---



// expected output
// Maria has the higest score: 6

let highestScore=0;
let position=0;

 function getHighestScoreIndex(){
     
     for (let i=0;i<scores.length;i++){
         if (scores[i] > highestScore){
            highestScore=scores[i];
            position=i;
           }
         }
         console.log(`highestScore is ${highestScore} on ${position} position`);
            
 };

     getHighestScoreIndex();


// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

function getHighestScoreIndex(){
     
    for (let i=0;i<scores.length;i++){
        if (scores[i] > highestScore){
           highestScore=scores[i];
           position =i;
            
        }
        }

    console.log(students[position] + `has the higest score: ${highestScore}`);

};

 getHighestScoreIndex();

// expected output
// Maria has the higest score: 6
