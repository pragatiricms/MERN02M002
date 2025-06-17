console.log("Today we are going to study dom manipulation")
// window.document.write("Qlith")
// console.error("This is error")

let heading1=document.getElementById("heading1")
heading1.innerText="Bye Bye"
console.log(heading1)

let div=document.getElementsByClassName("box")
console.log(div)

let secondDiv=document.getElementsByClassName("box")[1];
console.log(secondDiv)
let h2Coll=secondDiv.children;
// console.log(h2[0])

console.log(h2Coll[1])
h2Coll[1].innerHTML="<i>this is italic</i>"
console.log(h2Coll[1])

let para=document.getElementsByTagName("p")
console.log(para)


let h1=document.querySelector("#heading1")
console.log(h1)

let box=document.querySelector(".box")
console.log(box[0])

let secBox=document.querySelectorAll(".box")
console.log(secBox)

// let box1Data=box[1].children;
// console.log(box1Data[0].getAttribute("style"))
// box1Data[0].setAttribute("style","visibility: none")
// console.log(box1Data[0])

h2Coll[1].style="color: red; background: aqua"


let inputs=document.querySelectorAll("input")
console.log(inputs[0])
console.log(inputs[0].value)
console.log(inputs[1].value)

let buttons=document.querySelector("button")
console.log(buttons)

buttons.addEventListener('click',()=>{
    console.log(inputs[0].value)
    console.log(inputs[1].value)

    let userObj={
        fullName: inputs[0].value,
        age: inputs[1].value,
    }

    localStorage.setItem("user",JSON.stringify(userObj));
})


let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})



let div1=document.querySelector("#createEle")
console.log(div1)

let p=document.createElement("p")
p.innerText="this is my paragraph"

div1.appendChild(p)

console.log(div1)