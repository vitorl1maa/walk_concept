import "./css/global.css";
import NavbarComponent from "./components/NavbarComponent";
import Marketplace from "./pages/Marketplace/Marketplace";
import { DataProvider } from "../src/context/DataContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SneakerDetail from "./pages/SneakerDetail/SneakerDetail";
import CalendarRealease from "./pages/Calendar/CalendarRealease";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/sneaker_detail/:id" element={<SneakerDetail />} />
            <Route path="/calendar" element={<CalendarRealease/>} />
          </Routes>
          <NavbarComponent />
          <FooterComponent/>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
