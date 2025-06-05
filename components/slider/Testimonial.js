"use client";
import { sliderProps } from "@/utility/sliderprops";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <Slider {...sliderProps.testimonials} className="testimonials-active">
      {/* First Testimonial */}
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Quality Services</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "We recently booked a 3-day, 4-night package tour to Hyderabad with Trekk & Travel, and it was an amazing experience! The package was family-friendly, affordable, and offered excellent service throughout our trip. The team was very professional and ensured that we felt taken care of."
        </div>
        <div className="author">
          <div className="content">
            <h5>Junaid Mohammed</h5>
          </div>
        </div>
      </div>

      {/* Second Testimonial */}
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Exceptional Experience</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "The vacation days in Lakshadweep were awesome. Thank you Trekk & Travels for making this period memorable."
        </div>
        <div className="author">
          <div className="content">
            <h5>Shirin Shahana</h5>
          </div>
        </div>
      </div>

      {/* Third Testimonial */}
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Professional Service</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "I wanted to take a moment to express my sincere gratitude for the incredible Kashmir trip you organized for us. The entire experience was absolutely beautiful and truly memorable. Everything was handled with professionalism and care."
        </div>
        <div className="author">
          <div className="content">
            <h5>Irfana NP</h5>
          </div>
        </div>
      </div>

      {/* Fourth Testimonial */}
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Professional Service</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "Shafeeq from Trekk and Travel helped my family and I plan an amazing trip to Delhi and Agra. He booked our flights, hotels, and tours. Everything went smoothly, and we had a great time. Thanks, Shafeeq!"
        </div>
        <div className="author">
          <div className="content">
            <h5>Fathima Shahana</h5>
          </div>
        </div>
      </div>

      {/* Fifth Testimonial */}
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Professional Service</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "We wanted to say thank you for planning our recent trip. Your service was outstanding, and we had a fantastic time. I'll happily recommend your services to others and look forward to working with you again."
        </div>
        <div className="author">
          <div className="content">
            <h5>Roshik - Aufait</h5>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;