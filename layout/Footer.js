import Counter from "@/components/Counter";
import Link from "next/link";
import { getDatabase, ref, push } from "firebase/database";
import app from '@/firebase/config';
import { useState } from 'react';

const Footer = ({ footer, insta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer1 insta={insta} />;
  }
};
export default Footer;

const FooterInstagram = () => {
  return (
    <div className="container">
      <div className="footer-instagram pt-100 mb-70">
        <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram1.jpg"
            >
              <img
                src="/assets/images/instagram/instagram1.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram2.jpg"
            >
              <img
                src="/assets/images/instagram/instagram2.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram3.jpg"
            >
              <img
                src="/assets/images/instagram/instagram3.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram4.jpg"
            >
              <img
                src="/assets/images/instagram/instagram4.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram5.jpg"
            >
              <img
                src="/assets/images/instagram/instagram5.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="/assets/images/instagram/instagram6.jpg"
            >
              <img
                src="/assets/images/instagram/instagram6.jpg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer1 = () => {
  return (
    <footer
      className="main-footer bgs-cover overlay rel z-1 pb-25"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/footer.jpg)",
      }}
    >
      <div className="container">
        <div className="footer-top pt-100 pb-30">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="/assets/images/logos/logo-two.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  We curate bespoke itineraries tailored to your preferences,
                  ensuring every trip is seamless and enriching hidden gems
                  beaten
                </p>
                <div className="social-style-one mt-15">
                  <Link href="contact">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-pinterest" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-35">
                <h2>Subscribe Newsletter</h2>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
              <form 
                className="newsletter-form mb-50" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = e.target['news-email'].value;
                  try {
                    const db = getDatabase(app);
                    const subscribeRef = ref(db, 'subscribe');
                    await push(subscribeRef, {
                      email,
                      timestamp: new Date().toISOString()
                    });
                    e.target['news-email'].value = '';
                    alert('Thank you for subscribing!');
                  } catch (error) {
                    console.error('Error subscribing:', error);
                    alert('Sorry, there was an error. Please try again.');
                  }
                }}
              >
                <input
                  id="news-email"
                  name="news-email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="theme-btn bgc-secondary style-two"
                >
                  <span data-hover="Subscribe">Subscribe</span>
                  <i className="fal fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area pt-95 pb-45">
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Services</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="contact">Best Tour Guide</Link>
                  </li>
                  <li>
                    <Link href="contact">Tour Booking</Link>
                  </li>
                  <li>
                    <Link href="contact">Hotel Booking</Link>
                  </li>
                  <li>
                    <Link href="contact">Ticket Booking</Link>
                  </li>
                  <li>
                    <Link href="contact">Flight Booking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                  {/* <li>
                    <Link href="blog">Community Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Jobs and Careers</Link>
                  </li>
                  <li>
                    <Link href="blog">latest News Blog</Link>
                  </li> */}
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Packages</h5>
                </div>
                <ul className="list-style-three">
                <li>
                  <Link href="Honeymoon-packages">Honeymoon Package</Link>
                </li>
                <li>
                  <Link href="Family-packages">Family Package</Link>
                </li>
                <li>
                  <Link href="Holiday-packages">Holiday Package</Link>
                </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Categories</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="Resorts">Resorts</Link>
                  </li>
                  

                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" />                     Palam Jn, Natyamangalam, road, Kattuppara, Kerala , India

                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:Holidays@trekkandtravel.com">
                    Holidays@trekkandtravel.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-clock" /> Monday to Saturday 10 AM - 06PM
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+918714332630">
                    +918714332630</a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+919947172630">
                    +919947172630</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                   <a href="">TrekkandTravel</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
            <ul className="footer-bottom-nav">
            <li>
                  <Link href="https://www.instagram.com/trekkandtravel/?igshid=YmMyMTA2M2Y%3D">Instagram</Link>
                </li>
                <li>
                  <Link href="https://api.whatsapp.com/send/?phone=9947172630&text&type=phone_number&app_absent=0">Whtsapp</Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@trekkandtravel?si=ZL2YVSFaPXPk5QHQ">Youtube</Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/trekk-and-travel-b581a032b/">Linkedin</Link>
                </li>
                <li>
                  <Link href="https://x.com/Trekk_Travel">X</Link>
                </li>

              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <img src="/assets/images/icons/scroll-up.png" alt="Scroll  Up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = ({ insta }) => {
  return (
    <footer
      className={`main-footer footer-two bgp-bottom bgc-black rel z-15 ${
        insta ? "" : "pt-100 pb-115"
      }`}
      style={{
        backgroundImage: "url(/assets/images/backgrounds/footer-two.png)",
      }}
    >
      {insta && <FooterInstagram />}
      <div className="widget-area">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-40">
                  <Link href="/">
                    <img src="/assets/images/logos/logo-two.png" alt="Logo" />
                  </Link>
                </div>
                <div className="footer-map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129037.1297605145!2d76.14298572143458!3d10.916802805374187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cfd2d084704f%3A0xf86fefa79780debc!2sTREKK%20AND%20TRAVEL!5e0!3m2!1sen!2sin!4v1734072997976!5m2!1sen!2sin"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-sm-5">
                <div className="footer-title">
                  <h5>Services</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">Best Tour Guide</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Tour Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Hotel Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Ticket Booking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-md-4">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                  <li>
                    <Link href="blog">Community Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Jobs and Careers</Link>
                  </li>
                  <li>
                    <Link href="blog">latest News Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-lg-4">
                <div className="footer-title">
                  <h5>Packages</h5>
                </div>
                <ul className="list-style-three">
                <li>
                  <Link href="Honeymoon-packages">Honeymoon Package</Link>
                </li>
                <li>
                  <Link href="Family-packages">Family Package</Link>
                </li>
                <li>
                  <Link href="Holiday-packages">Holiday Package</Link>
                </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" /> 
                    Palam Jn, Natyamangalam, road, Kattuppara, Kerala , India

                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:Holidays@trekkandtravel.com">
                    Holidays@trekkandtravel.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+91 483 268087">+91 483 268087                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  <a href="">TrekkandTravels</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="https://www.instagram.com/trekkandtravel/?igshid=YmMyMTA2M2Y%3D">Instagram</Link>
                </li>
                <li>
                  <Link href="https://api.whatsapp.com/send/?phone=9947172630&text&type=phone_number&app_absent=0">Whtsapp</Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@trekkandtravel?si=ZL2YVSFaPXPk5QHQ">Youtube</Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/trekk-and-travel-b581a032b/">Linkedin</Link>
                </li>
                <li>
                  <Link href="https://x.com/Trekk_Travel">X</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
