import React from 'react'

function Home(props) {
  return (
    <div>
        value is :{props.a} <br/>

        the string value is:{props.str}

        <br/>
        The object value are 
        <br/>
        name:{props.obj.name}
        <br/>
        age:{props.obj.age}
        <br/>
        email:{props.obj.email}

        <br/>
        The array values are:{props.arr}
        <br/>
        index 0:{props.arr[0]}
         <br/>
        index 1:{props.arr[1]}
         <br/>
        index 2:{props.arr[2]}
         <br/>
        index 3:{props.arr[3]}
      <h1>This is my homepage</h1>
    </div>
  )
}

export default Home