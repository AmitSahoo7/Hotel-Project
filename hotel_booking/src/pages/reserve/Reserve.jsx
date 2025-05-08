import React, { useState } from "react";
import "./reserve.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  const handleConfirm = () => {
    const bookingDetails = {
      hotel: "Four Seasons Hotel",
      location: "Elton St 125, Mumbai",
      duration: "9 Nights",
      total: "$945",
      bookingId: "FSH2025",
      status: "Confirmed",
      payment: {
        method: paymentMethod,
        status: "Completed",
        date: "May 1, 2025",
        amount: "$945",
        paymentId: "PAYM945FSH"
      }
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    navigate("/confirmation");
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="reserveContainer">
        <h1 className="reserveTitle">Complete Your Reservation</h1>
        <div className="reserveWrapper">
          <div className="reserveDetails">
            <h2>Hotel: Four Seasons Hotel</h2>
            <p>Location: Elton St 125, Mumbai</p>
            <p>Duration: 9 Nights</p>
            <p>Total Price: $945</p>
          </div>

          <div className="paymentSection">
            <h2>Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>

            {paymentMethod === "card" && (
              <div className="paymentFields">
                <input type="text" placeholder="Cardholder Name" />
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="paymentFields">
                <input type="text" placeholder="Enter UPI ID" />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="paymentFields">
                <input type="text" placeholder="Bank Name" />
                <input type="text" placeholder="Account Number" />
              </div>
            )}

            <button onClick={handleConfirm} className="reserveBtn">
              Pay & Confirm
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
