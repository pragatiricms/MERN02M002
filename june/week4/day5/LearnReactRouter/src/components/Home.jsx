import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    let navigate=useNavigate()

    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      <h1>This is my home page
        <button onClick={handleClick}>go to about page</button>
      </h1>
    </div>
  )
}

export default Home
