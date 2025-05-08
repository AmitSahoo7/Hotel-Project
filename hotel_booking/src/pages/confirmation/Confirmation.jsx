import React, { useEffect } from "react";
import "./confirmation.css";
import Navbar from "../../components/navbar/Navbar";

const Confirmation = () => {
  useEffect(() => {
    const bookingDetails = {
      bookingId: "6451",
      checkIn: "May 4, 2025",
      checkOut: "May 5, 2025",
      room: "Economy Single Room",
      total: "$134",
      status: "Confirmed",
      paymentId: "6453",
      paymentDate: "May 1, 2025",
      paymentMethod: "Test Payment",
      paymentTotal: "$67",
    };
    localStorage.setItem("latestBooking", JSON.stringify(bookingDetails));
  }, []);

  return (
    <>
      <Navbar />
      <div className="confirmationContainer">
        <h2>Reservation Received</h2>
        <p>Thank you for your payment. Your transaction has been completed.</p>

        <h3>Booking Details</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Booking:</strong></td>
              <td>6451</td>
              <td><strong>Check-in:</strong></td>
              <td>May 4, 2025</td>
              <td><strong>Check-out:</strong></td>
              <td>May 5, 2025</td>
            </tr>
            <tr>
              <td><strong>Details:</strong></td>
              <td colSpan="5">Economy Single Room</td>
            </tr>
            <tr>
              <td><strong>Total:</strong></td>
              <td>$134</td>
              <td><strong>Status:</strong></td>
              <td>Confirmed</td>
            </tr>
          </tbody>
        </table>

        <h3>Payment Details</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Payment:</strong></td>
              <td>6453</td>
              <td><strong>Date:</strong></td>
              <td>May 1, 2025</td>
            </tr>
            <tr>
              <td><strong>Payment Method:</strong></td>
              <td>Test Payment</td>
              <td><strong>Total:</strong></td>
              <td>$67</td>
              <td><strong>Status:</strong></td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Confirmation;
