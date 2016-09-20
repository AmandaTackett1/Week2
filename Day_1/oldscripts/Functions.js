// // function greetings(){
// //     console.log("Weekend is near o.O");
// // }

// // greetings()
// // function HelloWorld (){
// //     console.log("Hello World");
// // }

// // HelloWorld();
// // function HelloWorld (MyNam){
// //     console.log("Hello World " + MyNam);
// // }

// // HelloWorld("Amanda");

// // How to add two numbers together in a function
// // function add (x, y){
// //     return x + y;
// // }
// // console.log (add(1000, 0));

// // wite a function that returns true if
// // the number passed is even, false otherwise
// // function isEven(num){
// //     return num % 2 == 0;
// // } 
// // var result= isEven(47);
// // console.log(result ? "even" : "odd");

// // // Call out smallest of two numbers together in a function
// // function smallernum(num1, num2){
// //  if(num1 < num2){
// //    return num1 
// //  } else {
// //    return num2
// //  }
// // }
// // console.log(smallernum(22, 17));

// // write a function that takes in an array of numbers
// // and have it return the avg array: [10,20,30,40]
// function average(array){
//  var totalarray = 0;
//  for (var i = 0; i < array.length; i++){
//    totalarray = totalarray + array[i];
//  }
//  return totalarray / array.length;
// }
// var  arraynumbers = [10,20,30,40];

// var bob = average(arraynumbers);
// console.log(bob);

// using a function,reverse the string kentucky then write out the solution THE STRING IS BEFORE .LENGTH
var h = "hello";

var reverse = "";
for (var i = h.length - 1; i >= 0; i--){
 reverse = reverse + h[i];
}
console.log(reverse);
// sort the numbers:[8,6,7,5,30,9]

