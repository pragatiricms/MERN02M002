console.log(1 !="1")

console.log(true !== "true");

console.log("2" -1);
console.log("a" -1);
console.log('10'-'4'-'3'-2 + '5');

let a=2;
let b=a++;
console.log(a,b);

console.log(0 == '')
console.log(0 === '')

console.log(!false)
console.log(!!false)
console.log(!!"false")
console.log(!!"dfgtyhuj")

let age=30;
if(age>=18){
    console.log("He/She can eligible for voting");
}

let age1=16;
if(age1>=18){
    console.log("He/She can eligible for voting");
}else{
    console.log("He/She can not eligible for voting");
}

// let age2=prompt("Enter your age");
// if(age>=18){
//     console.log("He/She can eligible for voting");
// }else{
//     console.log("He/She can not eligible for voting");
// }


//if-else ladder
let stMark=40;
if(stMark>=90){
    console.log("Grade A");
}else if(stMark>=80 ){
    console.log("Grade B");
}else if(stMark>=60){
    console.log("Grade C");
}else{
    console.log("Fail");
}

//Ternary operator
let stAge=40;
console.log(stAge>=18 ? "can vote" : "can not vote");

let num=prompt("Enter a number");
if(num%5==0){
    console.log("Number is divisible by 5");
}else{
    console.log("Number is not divisible by 5");
}

let num1=prompt("Enter a number");
if(num1%2==0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

//Loops
//1. for loop
//2. while loop
//3. do-while loop

for(let i=1; i<=10; i++){
    console.log("Number is: " + i);
}

console.log("this is while loop");
let i=1;
while(i<=5){
    console.log("Number is: " + i);
    i++;
}

console.log("this is do-while loop");
let n=1;
do{
    console.log("Number is: " + n);
    n++;
}while(n<=15);


//objects
let obj={
    name:"Pragati",
    age:21,
    phone:7882037892,
    email:"pragatikjhg234@gmail.com"
}
console.log(obj.name);
console.log(obj.age);
console.log(obj["email"]);
obj.name="Eleena";
console.log(obj.name);

let arr=[1,2,3,4,5,6];
// console.log(typeof arr);

//for-in loop
for (const key in obj){
    console.log(key + ": " + obj[key]);
}

for(let idx in arr){
    console.log("Index: " + idx + ", Value: " + arr[idx]);
}

//for-of loop
for (const e of arr) {
    console.log("Value: " + e);
}

// for (const e of obj) {
//     console.log("Value: " + e); we can't use for-of loop on objects directly

let str="Qlith Innovation";
console.log("String length is: " + str.length);

console.log(str[0]);

str[0]="d"
console.log("String after modification: " + str); 


//Interpolation of string
let c=20;
console.log("value is: " + c);
console.log(`value is: ${c}`); 

