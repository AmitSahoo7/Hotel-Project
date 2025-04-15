import { Link } from "react-router-dom"; 
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MailList from "../../components/mailList/MailList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import PropertyList from "../../components/propertyList/PropertyList";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div className="homeContainer">
        <div className="homeTitle">Welcome to Bookify</div>
        <div className="homeDescription">
          Discover the best hotels and book your stay with ease.
        </div>
        <div className="homeSearch">
          <input type="text" placeholder="Search for hotels..." />
          <button>Search</button>
        </div>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Some Featured Hotels</h1>
        
        <div className="featuredHotels">
          <Link to="/hotel/1" className="hotelLink">
            <FeaturedProperties />
          </Link>
          <br/>
          <Link to="/hotel/2" className="hotelLink">
            <FeaturedProperties />
          </Link>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;