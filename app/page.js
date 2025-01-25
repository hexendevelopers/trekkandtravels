import Counter from "@/components/Counter";
import SearchFilter from "@/components/SearchFilter";
import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import HomeholidayPackages from "../components/HomePagePackages/HomeholidayPackages";
import HomeFamilyPackages from "../components/HomePagePackages/HomeFamilyPackages";
import HomeHoneymoonPackages from "../components/HomePagePackages/HomeHoneymoonPackages";




const page = () => {
  return (
    <ReveloLayout header={1} footer={1}>
      {/* Hero Area Start */}
      <section className="hero-area bgc-black pt-200 rpt-120 rel z-2">
        <div className="container-fluid">
          <h1
            className="hero-title"
            data-aos="flip-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            tour &amp; Travel
          </h1>
          <div
            className="main-hero-image bgs-cover"
            style={{ backgroundImage: "url(assets/images/hero/hero.jpg)" }}
          />
        </div>
        {/* <SearchFilter /> */}
      </section>
      {/* Hero Area End */}
      {/* Destinations Area start */}
      <section className="destinations-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the World's Top Holiday Packages"}
                  countValue={34500}
                  subtitle1={"One site"}
                  subtitle2={"most popular experience you’ll remember"}
                />
              </div>
            </div>
          </div>






          <div className="row justify-content-center">


          <HomeholidayPackages/>

          </div>
        </div>
      </section>


      {/* Destinations Area end */}
      {/* About Us Area start */}
      <section className="about-us-area py-100 rpb-90 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-us-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <h2>
                    Travel with Confidence Top Reasons to Choose Our Agency
                  </h2>
                </div>
                <p>
                  We go above and beyond to make your travel dreams reality
                  hidden gems and must-see attractions
                </p>
                <div className="divider counter-text-wrap mt-45 mb-55">
                  <span>
                    We have{" "}
                    <span>
                      <span
                        className="count-text "
                        data-speed={3000}
                        data-stop={5}
                      >
                        <Counter end={5} />
                      </span>{" "}
                      Years
                    </span>{" "}
                    of experience
                  </span>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={300}
                      >
                        <Counter end={300} />
                      </span>
                      <span className="counter-title">Popular Destination</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={10}
                      >
                        <Counter end={10} />
                      </span>
                      <span className="counter-title">Satisfied Clients</span>
                    </div>
                  </div>
                </div>
                <Link href="Family-packages" className="theme-btn mt-10 style-two">
                  <span data-hover="Explore Destinations">
                    Explore Family Destinations
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-us-image">
                <div className="shape">
                  <img src="assets/images/about/shape1.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape2.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape3.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape4.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape5.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape6.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape7.png" alt="Shape" />
                </div>
                <img src="assets/images/about/about.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}







      {/* Popular Destinations Area start */}
      <section className="popular-destinations-area rel z-1">
        <div className="container-fluid">
          <div className="popular-destinations-wrap br-20 bgc-lighter pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center counter-text-wrap mb-70"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <SectionTitle
                    title={"Explore Honeymoon Packages"}
                    subtitle2="most popular experience"
                  />
                </div>
              </div>
            </div>



            
            <div className="container">
              <div className="row justify-content-center">
        
            <HomeHoneymoonPackages/>
                 
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations Area end */}




      {/* Features Area start */}
      <section className="features-area pt-100 pb-45 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div
                className="features-content-part mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-60">
                  <h2>
                    The Ultimate Travel Experience Features That Set Our Agency
                    Apart
                  </h2>
                </div>
                <div className="features-customer-box">
                  <div className="image">
                    <img
                      src="assets/images/features/features-box.jpg"
                      alt="Features"
                    />
                  </div>
                  <div className="content">
                    <div className="feature-authors mb-15">
                      <img
                        src="assets/images/features/feature-author1.jpg"
                        alt="Author"
                      />
                      <img
                        src="assets/images/features/feature-author2.jpg"
                        alt="Author"
                      />
                      <img
                        src="assets/images/features/feature-author3.jpg"
                        alt="Author"
                      />
                      <span>4k+</span>
                    </div>
                    <h6>850K+ Happy Customer</h6>
                    <div className="divider style-two counter-text-wrap my-25">
                      <span>
                        <span
                          className="count-text "
                          data-speed={5}
                          data-stop={5}
                        >
                          5
                        </span>{" "}
                        Years
                      </span>
                    </div>
                    <p>We pride ourselves offering personalized itineraries</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row pb-25">
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Tent Camping</Link>
                      </h5>
                      <p>
                        Tent camping is wonderful way to connect with nature
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Kayaking</Link>
                      </h5>
                      <p>
                        Kayaking is a thrilling outdoor activity that adventure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item mt-20">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Mountain Biking</Link>
                      </h5>
                      <p>
                        Mountain biking is exhilarating sport that physical
                        fitness
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Fishing &amp; Boat</Link>
                      </h5>
                      <p>
                        Fishing and boat bring joy quintessential activities
                        that
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}

 
      {/* Hotel Area start */}
      <section className="hotel-area bgc-black py-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the Family Package"}
                  subtitle2="most popular experience you’ll remember"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">



 

<HomeFamilyPackages/>

 
          </div>
          <div className="hotel-more-btn text-center mt-40">
            <Link href="Family-packages" className="theme-btn style-four">
              <span data-hover="Explore More Family Package">Explore More Family Package</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Hotel Area end */}
      









      
      {/* Testimonials Area start */}
      <section className="testimonials-area rel z-1">
        <div className="container">
          <div className="testimonials-wrap bgc-lighter">
            <div className="row">
              <div
                className="col-lg-5 rel"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="testimonial-left-image rmb-55"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonials/testimonial-left.jpg)",
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div
                  className="testimonial-right-content"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-55">
                    <h2>
                      <span>5280</span> Global Clients Say About Us Services
                    </h2>
                  </div>
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* CTA Area start */}
      {/* <section className="cta-area pt-100 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta1.jpg)" }}
              >
                <span className="category">Tent Camping</span>
                <h2>Explore the world best tourism</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta2.jpg)" }}
              >
                <span className="category">Sea Beach</span>
                <h2>World largest Sea Beach in Thailand</h2>
                <Link href="tour-details" className="theme-btn style-two">
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta3.jpg)" }}
              >
                <span className="category">Water Falls</span>
                <h2>Largest Water falls Bali, Indonesia</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* CTA Area end */}
      {/* Blog Area start */}
      {/* <section className="blog-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Read Latest News & Blog"}
                  subtitle2="most popular experience you’ll remember"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation with Ravelo
                      Travel Agency
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Unforgettable Adventures Travel Agency Bucket List
                      Experiences
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Exploring Culture and way Cuisine Travel Agency's they
                      Best Foodie Destinations
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </ReveloLayout>
  );
};
export default page;
