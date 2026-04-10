// 1. Create a const object named "product" to store information shown in the picture
// const product = { 
//     name : "ball pen",
//     rating : 5,
//     price : 300,
//     isDeal : true

// };

// console.log(product.name);








// 2. Get user to input a number using prompt("Enter a number : "). Check if the number is a multiple of 5 or not.


// let result = prompt("Enter a number : ");

// if (result % 5 == 0) { console.log( result , "is a multiple of 5");}
// else {console.log(result , "is not a multiple of 5");}






// 3. Write a code which can give grades to students according to their scores:
//    • 80-100,  A
//    • 70-79,   B
//    • 60-69,   C
//    • 50-59,   D
//    • 0-49,    F



let grade = prompt("Enter your grade : ");

if   (80 <= grade && grade >= 100) {console.log(grade , "is an A grade");}
else if (70 <= grade && grade >= 79) {console.log(grade , "is a B grade");}
else if (60 <= grade && grade >= 69) {console.log(grade , "is a C grade");}
else if (50 <= grade && grade >= 59) {console.log(grade , "is a D grade");}
