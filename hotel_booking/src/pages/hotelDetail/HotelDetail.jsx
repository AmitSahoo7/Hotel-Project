import React from "react";
import "./hotelDetail.css";

const hotelsData = [
  {
    title: "The Grand Plaza",
    image: "https://via.placeholder.com/400x200?text=Hotel+1",
    description: "Located in the heart of the city with luxurious rooms and top amenities.",
  },
  {
    title: "Sea View Resort",
    image: "https://via.placeholder.com/400x200?text=Hotel+2",
    description: "Enjoy the ocean breeze and a relaxing stay by the beach.",
  },
  {
    title: "Mountain Escape Lodge",
    image: "https://via.placeholder.com/400x200?text=Hotel+3",
    description: "Surrounded by nature, this hotel offers a perfect getaway.",
  },
];

const HotelDetail = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Bookify - Hotels</h1>
      </nav>

      <div className="container">
        <h2>Explore Our Top Hotels</h2>
        <div className="hotel-grid">
          {hotelsData.map((hotel, index) => (
            <div className="card" key={index}>
              <img src={hotel.image} alt={hotel.title} />
              <div className="card-body">
                <div className="card-title">{hotel.title}</div>
                <div className="card-text">{hotel.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
