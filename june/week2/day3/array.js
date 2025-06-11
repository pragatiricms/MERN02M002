console.log("Hello Array")

let a=20;
console.log("the value is: "+ a)
console.log(`The value of a is ${a}`); 

let str="welcome";
console.log(str[0]); 
str[0]="D"
console.log("String after modification: " + str); // Strings are immutable, so this won't change the string

console.log(str.length)

console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log("After trim " ,str.trim().length);
console.log("Here trim not applicable on string " ,str.length);

console.log(str.charAt(0));

console.log(str.concat("Qlith").concat(" Innovation"))

const newString= str.replace("W","D")
console.log(newString);

console.log(str.slice(0,6))
console.log(str.slice(0,str.lenght))
console.log(str.slice(2))
console.log(str.slice(-2))
console.log(str.slice(4,4))

let userName=prompt("Enter Your Full Name");
console.log("user name = "+userName.concat(",  ").concat("@").concat(userName).concat(userName.length))

console.log(str.substring(0,3))

//Arrays
let stArr=["Pragati", "Eleena", "Riya", "Pragyan"]
console.log(stArr[0])
for (const e of stArr) {
    console.log("Value: " + e);
}


//Average of the array elements
let numArr=[2,3,4,5,6,7]
let sum=0;
for (const e of numArr) {
    sum += e;
}

console.log(sum/(numArr.length));

const addEle=numArr.push(8);
console.log("Array after adding element: " + numArr);


let arr2=[1,2,3,4,5];
arr2.push(6);
arr2.push("Pragati");
console.log("Array after push: " + arr2);
arr2.pop()
console.log("Array after pop: " + arr2);

console.log(arr2.toString());

let arr3=[7,8,9];
console.log(arr2.concat(arr3)); 

arr2.unshift(0);
console.log("Array after unshift: " + arr2);
arr2.shift();
console.log("Array after shift: " + arr2);

console.log(arr2.slice(0,4));
console.log(arr2.slice(2));
console.log(arr2.slice(-2));

arr2.splice(1, 2,10);
console.log(arr2);

arr2.splice(4,1)
console.log("Array after splice: " + arr2);

console.log(arr2.includes(10))

console.log(arr2.reverse())

let compArr=["Bloomberg","Microsoft","Uber", "Google", "IBM","Netflix"];
compArr.shift();
console.log("Array after shift: " + compArr);

console.splice(1,1,"Ola");
console.log("Array after splice: " + compArr);

compArr.push("Amazon");
console.log("Array after push: " + compArr);

