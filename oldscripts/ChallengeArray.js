// Create an array of numbers 1 - 10, and write them in the terminal as follows:
// number: 1
// number: 2
// number: 3
// number: 4
// number: 5
// number: 6
// number: 7
// number: 8
var numArry= [3,2,3,4,5,6,7,8,9,10];
var SuM= 0;
// for( var A=0; A < numArry.length; A++){
//     console.log("number:", numArry [A])
// }
for(var A=0; A < numArry.length; A++){

    SuM = SuM + numArry[A]
}
console.log(SuM);
