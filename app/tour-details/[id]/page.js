"use client";
import { Suspense } from "react";
import RaveloAccordion from "@/components/RaveloAccordion";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useParams, useSearchParams } from 'next/navigation';
import { getDatabase, ref, onValue } from "firebase/database";
import app from '@/firebase/config';

const TourDetailsContent = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'holiday packages';
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("collapse0");
  const [active2, setActive2] = useState("collapse0");

  useEffect(() => {
    if (!params.id) return;
    
    const db = getDatabase(app);
    const packageRef = ref(db, `packages/${category}/${params.id}`);
    
    onValue(packageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPackageData(data);
      }
      setLoading(false);
    });
  }, [params.id, category]);

  if (loading) {
    return <div className="text-center p-5">Loading package details...</div>;
  }

  if (!packageData) {
    return <div className="text-center p-5">Package not found</div>;
  }

  return (
    <>
      <section
        className="page-banner-area pt-50 pb-35 rel z-1 bgs-cover"
        style={{ 
          backgroundImage: `url(${packageData.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <div className="container">
          <div className="banner-inner text-white">
            <div className="bg-overlay" style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: -1
            }}></div>
            <h2
              className="page-title mb-10"
              data-aos="fade-left"
              data-aos-duration={1500}
            >
                  {packageData.place}
                  </h2>
                  {packageData.price && (
              <div className="price-tag text-white mb-20" data-aos="fade-left" data-aos-duration={1500}>
                <h4 className="mb-0">
                  <span style={{ fontSize: '1.5rem' }}>₹{packageData.price.toLocaleString()}</span>
                </h4>
              </div>
            )}
          </div>
        
            
          <Link
                  href={`/Booknow?destination=${encodeURIComponent(packageData.place)}&category=${encodeURIComponent(category)}&package_id=${encodeURIComponent(params.id)}`}
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Book Now">Book Now</span>
                  <i className="fal fa-arrow-right" />
                </Link>
        </div>
      </section>

      <section className="tour-header-area pt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div
                className="tour-header-content mb-15"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                
                <div className="section-title pb-5">
               
                </div>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-5 text-lg-end"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="tour-header-social mb-10">
                <a href="#">
                  <i className="far fa-share-alt" />
                  Share tours
                </a>
                <a href="#">
                  <i className="fas fa-heart bgc-secondary" />
                  Wish list
                </a>
              </div>
            </div>
          </div>
         </div>
      </section>

      <section className="tour-details-page pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-content">
                <h3>Explore Tours</h3>
                <p>
                {packageData.description} 
                </p>
                <div className="row pb-55">
                  <div className="col-md-6">
                    <div className="tour-include-exclude mt-30">
                      <h5>Highlights</h5>
                      <ul className="list-style-one check mt-25">
                        {packageData.highlights && packageData.highlights.map((highlight, index) => (
                          <li key={index}>
                            <i className="far fa-check" /> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                   

                </div>
              </div>
              



              {packageData.inclusions && packageData.inclusions.length > 0 && (
                <>
                                  <h2>Itinerary</h2>

                  <h4>Inclusions</h4>
                  <Accordion
                    className="accordion-two mt-25 mb-60"
                    defaultActiveKey={active}
                  >
                    {packageData.inclusions.map((item, i) => (
                      <RaveloAccordion
                        title={item.title}
                        key={i}
                        event={`collapse${i}`}
                        onClick={() =>
                          setActive(active == `collapse${i}` ? "" : `collapse${i}`)
                        }
                        active={active}
                        content={item.description}
                      />
                    ))}
                  </Accordion>
                </>
              )}

              {packageData.exclusions && packageData.exclusions.length > 0 && (
                <>
                  <h4>Exclusions</h4>
                  <Accordion
                    className="accordion-two mt-25 mb-60"
                    defaultActiveKey={active2}
                  >
                    {packageData.exclusions.map((item, i) => (
                      <RaveloAccordion
                        title={item.title}
                        key={i}
                        event={`collapse${i}`}
                        onClick={() =>
                          setActive2(active2 === `collapse${i}` ? "" : `collapse${i}`)
                        }
                        active={active2}
                        content={item.description}
                      />
                    ))}
                  </Accordion>
                </>
              )}
              {packageData.faq && packageData.faq.length > 0 && (
                <>
                  <h3>Frequently Asked Questions</h3>
                  <Accordion
                    className="accordion-one mt-25 mb-60"
                    defaultActiveKey={active2}
                  >
                    {packageData.faq.map((faq, i) => (
                      <RaveloAccordion
                        title={faq.question}
                        key={i}
                        event={`collapse${i}`}
                        onClick={() =>
                          setActive2(active2 === `collapse${i}` ? "" : `collapse${i}`)
                        }
                        active={active2}
                        content={faq.answer}
                      />
                    ))}
                  </Accordion>
                </>
              )}
              
              <h3>Clients Reviews</h3>
              <div className="clients-reviews bgc-black mt-30 mb-60">
                <div className="left">
                  <b>4.8</b>
                  <span>(586 reviews)</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="right">
                  <div className="ratting-item">
                    <span className="title">Services</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Guides</span>
                    <span className="line">
                      <span style={{ width: "70%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Price</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Safety</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Foods</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Hotels</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
               
               
              
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-75">
              <div className="blog-sidebar tour-sidebar">
                <div
                  className="widget widget-booking"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <h5 className="widget-title">Tour Booking</h5>
                  {packageData.price && (
                    <div className="price-info mb-15">
                      <h4 className="package-price">
                        ₹{packageData.price.toLocaleString()}
                      </h4>
                    </div>
                  )}
                  <Link
                    href={`/Booknow?destination=${encodeURIComponent(packageData.place)}&category=${encodeURIComponent(category)}&package_id=${encodeURIComponent(params.id)}`}
                    className="theme-btn style-two bgc-secondary"
                    target="_blank"
                  >
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="widget widget-contact"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <h5 className="widget-title">Need Help?</h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-envelope" />{" "}

                      <a href="mailto:Holidays@trekkandtravel.com">
                      Holidays@trekkandtravel.com                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone-volume" />{" "}

                      <a href="callto:+91 483 268087">+91 483 268087</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="content text-white">
                    <span className="h6">Explore The World</span>
                    <h3>Best Tourist Place</h3>
                    <Link
                      href="/Holiday-packages"
                      className="theme-btn style-two bgc-secondary"
                    >
                      <span data-hover="Explore Now">Explore Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/assets/images/widgets/cta-widget.png" alt="CTA" />
                  </div>
                  <div className="cta-shape">
                    <img
                      src="/assets/images/widgets/cta-shape3.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

const Page = () => {
  return (
    <ReveloLayout>
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <TourDetailsContent />
      </Suspense>
    </ReveloLayout>
  );
};

export default Page;
