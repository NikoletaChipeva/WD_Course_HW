//TASK: 
//да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// ---> YOUR CODE HERE <---

// !!! Do not change code bellow
// TEST:
function calcRectangleArea (rectWidth,rectHeight){
    let area = rectWidth*rectHeight;
    console.log(`The area of rectangle is: ${area}`);
    return area;
}

    let rectWidth = 6;
    let rectHeight = 3;

let area = calcRectangleArea(rectWidth, rectHeight);


// EXPECTED RESULT:
// The area of rectangle is: 18