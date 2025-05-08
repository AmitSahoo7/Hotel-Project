import { Link } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MailList from "../../components/mailList/MailList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import PropertyList from "../../components/propertyList/PropertyList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel1 from "../images/image1.jpeg";
import hotel2 from "../images/image2.jpeg";
import hotel3 from "../images/image3.jpeg";
import hotel4 from "../images/image4.jpeg";

import "./home.css";

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      <Header type="home" />

      <div className="homeContainer">
        <div className="homeDescription">
          Discover the best hotels and book your stay with ease.
        </div>

        <div className="carouselWrapper">
          <Slider {...carouselSettings}>
            <div>
              <img src={hotel1} alt="Hotel 1" className="carouselImage" />
            </div>
            <div>
              <img src={hotel2} alt="Hotel 2" className="carouselImage" />
            </div>
            <div>
              <img src={hotel3} alt="Hotel 3" className="carouselImage" />
            </div>
            <div>
              <img src={hotel4} alt="Hotel 4" className="carouselImage" />
            </div>
          </Slider>
        </div>

        <h1 className="homeTitle">Some Featured Hotels</h1>

        <div className="featuredHotels">
          <Link to="/hotels/1" className="hotelLink">
            <FeaturedProperties />
          </Link>
          <br />
          <Link to="/hotels/2" className="hotelLink">
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
