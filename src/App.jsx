import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import SlideComponent from './components/SlideComponent'
import Marketplace from './pages/Marketplace/Marketplace'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent/>
        <div className="container-fluid p-0">
          <Routes>
          <Route path='/' element={<Marketplace/>} />
        </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
