import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import HotelDetail from "./pages/hotelDetail/HotelDetail"; // Import the HotelDetail component
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Reserve from "./pages/reserve/Reserve";
import Confirmation from "./pages/confirmation/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetail />} /> {/* Add this route */}
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/confirmation" element={<Confirmation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;