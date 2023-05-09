
// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     //   console.log(message)
//     return message;
//     } else {
//       const message = "Yay! You're old enough!";
//     //   console.log(message)
//     return message;
//     }


//   }

//   console.log(checkAge(21));


// function multiply(a, b = 1) {
//     return a * b;
//   }
// //b default parameters is meaning that if no value is assign to b ,b will take the value of one
//   console.log(multiply(5, 2));
//   //expected output: 10

//   console.log(multiply(5));

// Conditional In JavaScript
// A. Conditional (Ternary) Operator
// The ternary operator is the only JavaScript operator that takes three operands:

// a condition followed by a question mark (?),

// an expression to execute if the condition is true, followed by a colon (:),

// and finally, the expression to execute if the condition is false.

// <condition> ? <expression> : <expression>
// function getFee(isMember) {
//     return (isMember ? "$2.00" : "$10.00");
//   }

//   console.log(getFee(true));
//   // expected output: "$2.00"

//   console.log(getFee(false));
//   // expected output: "$10.00"

//   console.log(getFee(1));
//   same as
// function getfee(isMember){
//     if(isMember == true){
//         return "$2.00"
//     }else{
//         return "$10.00"
//     }
// }
// console.log(getfee(1));

// Create a function to check the year given by the user If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

