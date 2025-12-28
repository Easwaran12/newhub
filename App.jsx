import React from 'react'
// import Esh from './Esh.jsx'
// import Mur from './Mur.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Services from './component/Services.jsx'
import {Routes,Route,Link} from "react-router-dom"

const App = () => {
  return (
    <div>
      
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/About">About</Link>
        <Link to ="/Contact">Contact</Link>
        <Link to ="/Services">Services</Link>
      </nav>
      <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/About" element ={<About/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      <Route path = "/Services" element ={<Services/>}/>
    </Routes>
      {/* <Esh/> */}
      {/* <Mur/> */}
    </div>
  )
}

export default App
