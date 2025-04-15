import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import HotelDetail from "./pages/hotelDetail/HotelDetail"; // Import the HotelDetail component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetail />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;