import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./hotelDetail.css";

const HotelDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="hotelDetailContainer">
        <h1 className="hotelTitle">Four Seasons Hotel</h1>
        <div className="hotelImages">
          
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/449317245.jpg?k=79b59447ab944165bdbe5bcc902c6d4ddc87953d5c3d9003c0f5f96200935c9d&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <img
          src="https://www.fourseasons.com/alt/img-opt/~75.701.211,3333-0,0000-2577,3333-1933,0000/publish/content/dam/fourseasons/images/web/MUM/MUM_396_original.jpg"
          alt=""
          className="fpImg"
        />
        </div>
        <div className="hotelDetails">
          <p className="hotelDescription">
            lorem200 ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quibusdam, voluptates, quisquam voluptatibus quibusdam
            voluptates, quisquam voluptatibus quibusdam voluptates, quisquam
          </p>
          <p className="hotelPrice">Price per night: $120</p>
        </div>
        <button className="bookNowButton">Book Now</button>
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetail;