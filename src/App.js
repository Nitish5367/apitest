import React from 'react'
import { useState,useEffect } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Education from './Education'
import Interest from './Interest'
import Projects from './Projects'
import Aboutme from './Aboutme'
const App = () => {

  return (
   <BrowserRouter>
   <Nav/>
   
    <Routes>
      <Route path='/' element={<Aboutme/>}></Route>
      <Route path='/edu' element={<Education/>}></Route>
      <Route path='/inter' element={<Interest/>}></Route>
      <Route path='/proj' element={<Projects/>}></Route>
    </Routes>
     
   </BrowserRouter>
  )
}

export default App