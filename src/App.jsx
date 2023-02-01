import './css/global.css'
import NavbarComponent from './components/NavbarComponent'
import Marketplace from './pages/Marketplace/Marketplace'
import { DataProvider } from '../src/context/DataContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Marketplace/>} />
        </Routes>
      </BrowserRouter>
      <NavbarComponent/>
    </div>
    </DataProvider>
  )
}

export default App
