import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotel";
import Resort from "./pages/resort/Resort";
// import GuestHouses from "./pages/guestHouses/GuestHouses";
import Villas from "./pages/villa/Villas";
import HotelDetail from "./pages/hotelDetail/HotelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/resort" element={<Resort />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/detail/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;