// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

// TEST:
let arr = [
    [1,2,3],
    [4,5,6]
  ];

  // expected output: 12

  let sum;
  function SumEven2DimArrayElements(arr) {
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
              if (arr[i][j] % 2 === 0) {
                  sum = sum + arr[i][j];            
          }
      }
  }   

  let sum = SumEven2DimArrayElements(arr);
  console.log(sum);
  // expected output: 12
  }
  
