console.log("Event handling")

// let button=document.getElementById("btn")
// console.log(button)

// button.onclick=()=>{
//     alert("button clicked")
//     button.style.background="red";
// }


// button.onkeyup=()=>{
//     console.log("Key Pressed");
// }

// let callback=()=>{
//     alert("Button clicked");
// }

// button.addEventListener("click",callback)


// button.removeEventListener("click",callback)

let button1=document.getElementById("btn1")
console.log(button1)


let color="light";
button1.addEventListener("Clicked",()=>{
   if(color==="light"){
    console.log("color")
   document.body.style.background="black";
   color="dark"
   }else{
    console.log(color)
    document.body.style.background="white"
    color="light";
   }
});
