// Normal Function 

function total(item1:number, item2:number, item3:number,) {
    return item1 + item2 + item3
}
console.log(total(10,20,30));

// Rest Operator (...)

function totall(...totalItem: number[]) {
    console.log(totalItem);
    
}
totall(10);
totall(10,1000,2000,5000,4000,6000);


// Using Rest Operators with Loops
function totals(...totalItem: number[]){
let totalPrice:number = 0;
for (let i = 0; i < totalItem.length; i++)
    totalPrice += totalItem[i];
    console.log("TOTAL:",totalPrice);
    
}
totals(10,1000,2000,5000,4000,6000);


// Normal Greeting Function
function greetings(greet:string) {
    console.log(greet);
    
}
greetings("Hello");

// Array Rest Operator

function greeting(...greets:string[]) {
    console.log(greets);
    
}
greeting("Hello", "Faizan");

// Array Rest Operator JOin Method

function greetingss(...greets:string[]) {
    console.log(greets.join(''));
    
}
greetingss("Hello ", "Faizan");

// Functions Overloading

// Type humesha Overload ki hi chalegi
function summ(a:number, b:number):number;

// ab humnay string de di data type
function summ(a:string, b:string):string; 

// normal body functions type ko consider nhi krta 
function summ(a:any, b:any): any {
    return a + b;
}
console.log(sum(12,3));

// It shows an error because data type is a number not a string any isnay any type consider ni kiya
// sum('ALi ','Bilal')

console.log(sum('ALi ', 'Bilal'));


//Normal Function

function sum(a:any, b:any): any {
    return a + b;
}
console.log(sum(12,3));


console.log(sum(1,2));
console.log(sum("Hello ", "World"));
console.log(sum(true, false));

// Now lets create a REAL Function using overloading means signature
function signIn(email:string, password: number):string;
function signIn(email:string): string;

// ? mark sign used for Optional
function signIn(email:any, password?: any): any {//this is called Body
    console.log(email, password);
    
}
console.log(signIn);

// Structural Typing

interface Ball{
    diameter:number
}
interface Bat{
    diameter:number
}

let ball:Ball = {diameter:10};
let bat:Bat = {diameter:20};

// let sphere:sphere = {diameter:15};