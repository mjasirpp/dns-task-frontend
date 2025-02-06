import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Connect with Us Box */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Connect with Us</h4>
            <p><FaPhone /> <span>+91 9567843340</span></p>
            <p><FaEnvelope /> <span>info@deepnetsoft.com</span></p>
          </div>
        </div>

        {/* Social Media Box */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>DEEP NET SOFT</h4>
            <div>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="me-2" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="me-2" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Find Us Box */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Find Us</h4>
            <p><FaMapMarkerAlt /> <span>First floor, Geo infopark, Infopark EXPY, Kakkanad</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
