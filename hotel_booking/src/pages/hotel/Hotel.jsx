
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "FabHotel The Hastings Club - Nr Victoria Memorial",
      location: "Kolkata, India",
      rating: 9.2,
      reviews: "Superb · 5 reviews",
      price: "₹3,066",
      originalPrice: "₹5,679",
      image: "https://3.imimg.com/data3/FM/MD/MY-1906485/hotel-booking.jpg",
    },
    {
      id: 2,
      name: "Collection O Visakhapatnam Railway Station",
      location: "Visakhapatnam, India",
      rating: 7.3,
      reviews: "Good · 41 reviews",
      price: "₹2,216",
      originalPrice: "₹4,522",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3d/48/3a/ginger-bhubaneshwar-facade.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 3,
      name: "Super Hotel O Dakshin Dwar formerly Radha Krishna Niwas",
      location: "Puri, India",
      rating: 8.5,
      reviews: "Very good · 26 reviews",
      price: "₹4,535",
      originalPrice: "₹8,246",
      image: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: 4,
      name: "FabHotel Quest - Nr Quest Mall",
      location: "Kolkata, India",
      rating: 8.4,
      reviews: "Very good · 510 reviews",
      price: "₹3,477",
      originalPrice: "₹7,095",
      image: "https://media.cntraveler.com/photos/613aabab7084bd911b309b44/16:9/w_2580,c_limit/Nobu%20Hotel%20Chicago_006-NC-Zen%20Deluxe.jpg",
    },
    {
      id: 1,
      name: "FabHotel The Hastings Club - Nr Victoria Memorial",
      location: "Kolkata, India",
      rating: 9.2,
      reviews: "Superb · 5 reviews",
      price: "₹3,066",
      originalPrice: "₹5,679",
      image: "https://3.imimg.com/data3/FM/MD/MY-1906485/hotel-booking.jpg",
    },
    {
      id: 2,
      name: "Collection O Visakhapatnam Railway Station",
      location: "Visakhapatnam, India",
      rating: 7.3,
      reviews: "Good · 41 reviews",
      price: "₹2,216",
      originalPrice: "₹4,522",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3d/48/3a/ginger-bhubaneshwar-facade.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 3,
      name: "Super Hotel O Dakshin Dwar formerly Radha Krishna Niwas",
      location: "Puri, India",
      rating: 8.5,
      reviews: "Very good · 26 reviews",
      price: "₹4,535",
      originalPrice: "₹8,246",
      image: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: 4,
      name: "FabHotel Quest - Nr Quest Mall",
      location: "Kolkata, India",
      rating: 8.4,
      reviews: "Very good · 510 reviews",
      price: "₹3,477",
      originalPrice: "₹7,095",
      image: "https://media.cntraveler.com/photos/613aabab7084bd911b309b44/16:9/w_2580,c_limit/Nobu%20Hotel%20Chicago_006-NC-Zen%20Deluxe.jpg",
    },
    {
      id: 1,
      name: "FabHotel The Hastings Club - Nr Victoria Memorial",
      location: "Kolkata, India",
      rating: 9.2,
      reviews: "Superb · 5 reviews",
      price: "₹3,066",
      originalPrice: "₹5,679",
      image: "https://3.imimg.com/data3/FM/MD/MY-1906485/hotel-booking.jpg",
    },
    {
      id: 2,
      name: "Collection O Visakhapatnam Railway Station",
      location: "Visakhapatnam, India",
      rating: 7.3,
      reviews: "Good · 41 reviews",
      price: "₹2,216",
      originalPrice: "₹4,522",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3d/48/3a/ginger-bhubaneshwar-facade.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 3,
      name: "Super Hotel O Dakshin Dwar formerly Radha Krishna Niwas",
      location: "Puri, India",
      rating: 8.5,
      reviews: "Very good · 26 reviews",
      price: "₹4,535",
      originalPrice: "₹8,246",
      image: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: 4,
      name: "FabHotel Quest - Nr Quest Mall",
      location: "Kolkata, India",
      rating: 8.4,
      reviews: "Very good · 510 reviews",
      price: "₹3,477",
      originalPrice: "₹7,095",
      image: "https://media.cntraveler.com/photos/613aabab7084bd911b309b44/16:9/w_2580,c_limit/Nobu%20Hotel%20Chicago_006-NC-Zen%20Deluxe.jpg",
    },
    {
      id: 1,
      name: "FabHotel The Hastings Club - Nr Victoria Memorial",
      location: "Kolkata, India",
      rating: 9.2,
      reviews: "Superb · 5 reviews",
      price: "₹3,066",
      originalPrice: "₹5,679",
      image: "https://3.imimg.com/data3/FM/MD/MY-1906485/hotel-booking.jpg",
    },
    {
      id: 2,
      name: "Collection O Visakhapatnam Railway Station",
      location: "Visakhapatnam, India",
      rating: 7.3,
      reviews: "Good · 41 reviews",
      price: "₹2,216",
      originalPrice: "₹4,522",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3d/48/3a/ginger-bhubaneshwar-facade.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 3,
      name: "Super Hotel O Dakshin Dwar formerly Radha Krishna Niwas",
      location: "Puri, India",
      rating: 8.5,
      reviews: "Very good · 26 reviews",
      price: "₹4,535",
      originalPrice: "₹8,246",
      image: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: 4,
      name: "FabHotel Quest - Nr Quest Mall",
      location: "Kolkata, India",
      rating: 8.4,
      reviews: "Very good · 510 reviews",
      price: "₹3,477",
      originalPrice: "₹7,095",
      image: "https://media.cntraveler.com/photos/613aabab7084bd911b309b44/16:9/w_2580,c_limit/Nobu%20Hotel%20Chicago_006-NC-Zen%20Deluxe.jpg",
    },
  ];

  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="hotelsContainer">
        <h1>Hotels</h1>
        <div className="hotelsGrid">
          {hotels.map((hotel) => (
            <div className="hotelCard" key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} className="hotelImage" />
              <div className="hotelInfo">
                <h2 className="hotelName">{hotel.name}</h2>
                <p className="hotelLocation">{hotel.location}</p>
                <div className="hotelRating">
                  <span className="rating">{hotel.rating}</span>
                  <span className="reviews">{hotel.reviews}</span>
                </div>
                <div className="hotelPrice">
                  <span className="currentPrice">{hotel.price}</span>
                  <span className="originalPrice">{hotel.originalPrice}</span>
                </div>
                <Link to={`/detail/${hotel.id}`} className="detailsButton">
                  View Details
                </Link>
              </div>

            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from India's Gate in Mumbai, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is Chhatrapati Shivaji Maharaj International Airport Mumbai, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Mumbai, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <Link to="/reserve">
              <button>Reserve or Book Now!</button>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;