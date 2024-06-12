"use strict";
// Normal Function 
// function total(item1:number, item2:number, item3:number,) {
//     return item1 + item2 + item3
// }
// console.log(total(10,20,30));
// Rest Operator (...)
// function totals(...totalItem: number[]) {
//     console.log(totalItem);
// }
// totals(10);
// totals(10,1000,2000,5000,4000,6000);
// Using Rest Operators with Loops
function totals(...totalItem) {
    let totalPrice = 0;
    for (let i = 0; i < totalItem.length; i++)
        totalPrice += totalItem[i];
    console.log("TOTAL:", totalPrice);
}
totals(10, 1000, 2000, 5000, 4000, 6000);
// Normal Greeting Function
function greetings(greet) {
    console.log(greet);
}
greetings("Hello");
// Array Rest Operator
function greeting(...greets) {
    console.log(greets);
}
greeting("Hello", "Faizan");
// Array Rest Operator JOin Method
function greetingss(...greets) {
    console.log(greets.join(''));
}
greetingss("Hello ", "Faizan");
// normal body functions type ko consider nhi krta 
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 3));
// It shows an error because data type is number not a string any isnay any type consider ni kiya
// sum('ALi ','Bilal')
console.log(sum('ALi ', 'Bilal'));
// ? mark sign used for Optional
function signIn(email, password) {
    console.log(email, password);
}
console.log(signIn);
