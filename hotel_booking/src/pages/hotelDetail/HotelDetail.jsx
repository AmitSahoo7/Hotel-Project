import React from "react";
import { useParams } from "react-router-dom";
import "./hotelDetail.css";

const HotelDetail = () => {
  const { id } = useParams();
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
      description:
        "Located in the heart of Kolkata, this hotel offers luxurious accommodations with modern amenities and excellent service.",
      highlights: "Excellent location – 500m from center",
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/625096783.jpg?k=811c1b73a8913041eb1d035f230d08c9cb7f49b25ad12d32ff66fd13c4962356&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/642865299.jpg?k=705e150307d23916cc1bde17b279132306f7904a5e20d9814a27be776dfac532&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/642647101.jpg?k=cc1ccb4bac9a697fd74861d41d82a6bdac5d1e9aa6c085d72f6da88f6041bfed&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/642647005.jpg?k=f9323ec65c492c7e33f40e5c8231f10f1297ebee1661902f5d151fdd971ab328&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/642648994.jpg?k=91a7a1d4204bea501aaed90ff5a761b5244d27ae8075a5b366d3e02295ffba16&o=&hp=1",
      ],
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
      description:
        "Enjoy a comfortable stay near the Visakhapatnam Railway Station with easy access to the city's attractions.",
      highlights: "Amazing location – 200m from railway station",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3d/48/3a/ginger-bhubaneshwar-facade.jpg?w=1200&h=-1&s=1",
        "https://via.placeholder.com/300x200?text=Bedroom",
        "https://via.placeholder.com/300x200?text=Dining+Area",
        "https://via.placeholder.com/300x200?text=Lobby",
        "https://via.placeholder.com/300x200?text=Bathroom",
      ],
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
      description:
        "A peaceful retreat in Puri, offering a serene environment and proximity to the famous Jagannath Temple.",
      highlights: "Close to Jagannath Temple – 1km from center",
      images: [
        "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
        "https://via.placeholder.com/300x200?text=Bedroom",
        "https://via.placeholder.com/300x200?text=Dining+Area",
        "https://via.placeholder.com/300x200?text=Lobby",
        "https://via.placeholder.com/300x200?text=Bathroom",
      ],
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
      description:
        "Stay near Quest Mall in Kolkata and enjoy a vibrant shopping and dining experience.",
      highlights: "Great location – 300m from Quest Mall",
      images: [
        "https://media.cntraveler.com/photos/613aabab7084bd911b309b44/16:9/w_2580,c_limit/Nobu%20Hotel%20Chicago_006-NC-Zen%20Deluxe.jpg",
        "https://via.placeholder.com/300x200?text=Bedroom",
        "https://via.placeholder.com/300x200?text=Dining+Area",
        "https://via.placeholder.com/300x200?text=Lobby",
        "https://via.placeholder.com/300x200?text=Bathroom",
      ],
    },
  ];

  // Find the hotel based on the id from the URL
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotelDetailContainer">
      <div className="hotelHeader">
        <h1>{hotel.name}</h1>
        <p className="hotelLocation">
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          {hotel.location}
        </p>
        <p className="hotelHighlights">{hotel.highlights}</p>
        
      </div>

      <div className="hotelContent">
        <div className="hotelImageContainer">
          <img src={hotel.image} alt={hotel.name} className="hotelMainImage" />
        </div>

        <div className="hotelSidebar">
          <div className="propertyHighlights">
            <h3>Property Highlights</h3>
            <p>{hotel.description}</p>
            <div className="hotelRating">
              <span className="rating">{hotel.rating}</span>
              <span className="reviews">{hotel.reviews}</span>
            </div>
            <div className="hotelPrice">
              <span className="currentPrice">{hotel.price}</span>
              <span className="originalPrice">{hotel.originalPrice}</span>
            </div>
            <button className="bookNowButton">Reserve</button>
          </div>
        </div>
      </div>

      <div className="hotelAdditionalImages">
        <h2>More Photos</h2>
        <div className="imageGrid">
          {hotel.images.map((img, index) => (
            <img key={index} src={img} alt={`Hotel view ${index + 1}`} className="additionalImage" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;