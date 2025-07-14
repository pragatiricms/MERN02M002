
import './App.css'
import Home from './components/Home'

function App() {
  // let[count,setCount]=useState(0)
  // let[total,setTotal]=useState(0)
//useEffect

// useEffect(()=>{
//   //first
//   //set of code

//   return()=>{
//     second
//   }
// },[third])

//case-1
//use effect will execute at every render

// useEffect(()=>{
//   alert("use effect trigger")
// })

//case-2
//It will execute at the first render only

//useEffect(()=>{
//   alert("use effect trigger at the first render")
// },[])

//case-3
//it will give the return when the component is unmounted
// useEffect(()=>{
//   alert("value updated")
//   return ()=>{
//     alert("value unmounted")
//   }
//  })

//case-4
//it will execute based on the depandency
// useEffect(()=>{
//   alert("based on dep")
// },[count,total])

  return (
    <>
      <h1>Hello</h1> <br/>
      {/* <strong>count :{count} </strong> <br />
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <br/>
      <strong>Total: {total}</strong><br/>
      <button onClick={()=>setTotal(total+1)}>Inc total</button> */}
      <Home/>
    </>
  )
}

export default App
