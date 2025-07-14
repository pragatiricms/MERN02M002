
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Register from './components/Register'
import FetchID from './components/FetchID'


function App() {
  

  return (
    <>
    <strong>Welcome to React Router world</strong>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/byId/:id' element={<FetchID/>}></Route>
      </Routes>

    </>
  )
}

export default App
