//this is function declaration
function print(){
    console.log("This is my function");
}

//this is function invocation/ calling
print();

console.log(print)

let printQlith=function(){
    console.log("This is my function expression");
}

printQlith();

//function with parameter
let add=function(a,b){
    return a+b;
}

let sum=add(10,20);
console.log(sum);

let sub=()=>{
    console.log("This is my arrow function");
}
sub();

//higher order function
function higherOrderFunction(a,b,task){
    task(a,b);
}

let addNum=higherOrderFunction(10,20,(x,y)=>{
      return x+y;
})

console.log(addNum);


//NUMBER OF VOWELS IN A STRING
//using includes method
function vowel(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
let str = "Hello WORLD";
let vowelCount = vowel(str);
console.log(`Number of vowels in "${str}": ${vowelCount}`);

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



let arr=[1,2,3,4,5,6,7,8];
let count=0;

arr.forEach((v,idx)=>
{
    console.log(`In index ${idx} value is : ${v}`)
})

arr.forEach((v,idx,ar)=>{
    if(v%2==0){
        count++;
    }
})
console.log(count);

let strArr=["Pragati", "Eleena", "siya", "Pragyan"];
let countStartWithS=0;

strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})

console.log("ans is: ", countStartWithS);

let numArr=[1,2,3,4,5];

let modifiedArr=numArr.map((v)=>{
    return v+1;
})

console.log(modifiedArr);


//filter method
let filterData=numArr.filter((v)=>{
    return v%2===0;
})

console.log(filterData);

let sumOfNum=numArr.reduce((accu,curr)=>{
    return accu+curr;
},0)

console.log("Sum is: ",sumOfNum);

let studentMarks=[20,30,40,50,60,70];
let afterFilter=studentMarks.filter((v)=>{
    return v>=50;
})

console.log(afterFilter);

let n=prompt("enter a number");

let from1ToN=[];

for(let i=1;i<=n;i++){
    from1ToN.push(i);
}

console.log(from1ToN);

let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})

let multFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu*curr;
})

console.log("Summuation is: ",sumFrom1ToN);
console.log("Multiplication is: ",multFrom1ToN);






















