import React from 'react'
import Header from '../Header/Header'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Akredition from '../pages/Akredetion/Akredition'
import Colledj from '../pages/Colledj/Colledj'
import Nasha from '../pages/NashaGorddost/Nasha'
import New from '../pages/New/New'
import Pikure from '../pages/Piktures/Pikure'
import Sport from '../pages/Sports/Sport'
import { Route,Routes } from 'react-router-dom'
import Contact from '../pages/Contact/Contact'

const App = () => {
  return (
    <>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/about" element={<About />} />
          <Route path="/akredition" element={<Akredition />} />
          <Route path="/colledj" element={<Colledj />} />
          <Route path="/nasha" element={<Nasha />} />
          <Route path="/new" element={<New />} />
          <Route path="/pikure" element={<Pikure />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/contact" element={<Contact />} />
    
        </Routes>
    
    </>
  )
}

export default App
