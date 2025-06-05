"use client";
import Banner from "@/components/Banner";
import ReveloLayout from "@/layout/ReveloLayout";
import { useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';

const BookingForm = () => {
  const form = useRef();
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');
  const category = searchParams.get('category');
  const package_id = searchParams.get('package_id');

  useEffect(() => {
    if (destination) {
      const destinationInput = document.getElementById('destination');
      if (destinationInput) {
        destinationInput.value = destination;
      }
    }
  }, [destination]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ybye3ax', 'template_6xbuq0f', form.current, 'VVDiw6aQp7W-bBLyI')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        // Clear form
        e.target.reset();
        alert('Thank you for your inquiry! We will get back to you soon.');
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="contact-form-area py-70 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="comment-form bgc-lighter z-1 rel mb-30 rmb-55">
              <form
                ref={form}
                id="contactForm"
                className="contactForm"
                name="contactForm"
                onSubmit={sendEmail}
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h2>Plan Your Journey</h2>
                </div>
                <p>
                  Your email address will not be published. Required fields
                  are marked *
                </p>
                <div className="row mt-35">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        placeholder="Enter your first name"
                        defaultValue=""
                        required=""
                        data-error="Please enter your First Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control"
                        placeholder="Enter your last name"
                        defaultValue=""
                        required=""
                        data-error="Please enter your Last Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contact_number">Contact Number</label>
                      <input
                        type="tel"
                        id="contact_number"
                        name="contact_number"
                        className="form-control"
                        placeholder="Enter your contact number"
                        defaultValue=""
                        required=""
                        data-error="Please enter your Contact Number"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Id</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        defaultValue=""
                        required=""
                        data-error="Please enter your Email Id"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="travel_date">Travel Date</label>
                      <input
                        type="date"
                        id="travel_date"
                        name="travel_date"
                        className="form-control"
                        defaultValue=""
                        required=""
                        data-error="Please select your Travel Date"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">                        <label htmlFor="number_of_travelers">Number of Travelers</label>
                      <input
                        type="number"
                        id="number_of_travelers"
                        name="number_of_travelers"
                        className="form-control"
                        placeholder="Enter number of travelers"
                        min="1"
                        max="50"
                        required=""
                        data-error="Please enter number of travelers"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="destination">Destination</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        className="form-control"
                        placeholder="Where would you like to travel?"
                        defaultValue=""
                        required=""
                        data-error="Please enter your desired Destination"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <ul className="radio-filter mb-25">
                         
                      </ul>
                      <button type="submit" className="theme-btn style-two">
                        <span data-hover="Submit Inquiry">Submit Inquiry</span>
                        <i className="fal fa-arrow-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="contact-images-part"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row">
                <div className="col-12">
                  <img
                    src="assets/images/contact/contact1.jpg"
                    alt="Contact"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/images/contact/contact2.jpg"
                    alt="Contact"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/images/contact/contact3.jpg"
                    alt="Contact"
                  />
                </div>
              </div>
              <div className="circle-logo">
              <img width="150"   src="assets/images/logos/logo.png" alt="Logo" title="Logo" />

                {/* <img src="assets/images/contact/icon.png" alt="Logo" /> */}
                {/* <span className="title h2">TrekkandTravels</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <ReveloLayout insta>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingForm />
      </Suspense>
    </ReveloLayout>
  );
};

export default Page;