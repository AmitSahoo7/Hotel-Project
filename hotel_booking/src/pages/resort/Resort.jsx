import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"; 
import "./resort.css";

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
        <h1>Resorts</h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;