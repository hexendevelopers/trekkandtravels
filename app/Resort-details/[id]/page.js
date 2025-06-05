"use client";
import RaveloAccordion from "../../../components/RaveloAccordion";
import Subscribe from "../../../components/Subscribe";
import ReveloLayout from "../../../layout/ReveloLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useParams } from 'next/navigation';
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../../../firebase/config';

const ResortDetailsPage = () => {
  const params = useParams();
  const [resortData, setResortData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const db = getDatabase(app);
      const resortRef = ref(db, `Resorts`);
      
      onValue(resortRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Search through all locations for the resort with matching ID
          let foundResort = null;
          Object.entries(data).forEach(([location, locationData]) => {
            Object.entries(locationData).forEach(([id, resort]) => {
              if (id === params.id) {
                foundResort = { ...resort, id, location };
              }
            });
          });
          setResortData(foundResort);
        }
        setLoading(false);
      });
    }
  }, [params.id]);

  if (loading) {
    return <div className="text-center p-5">Loading resort details...</div>;
  }

  if (!resortData) {
    return <div className="text-center p-5">Resort not found</div>;
  }

  return (
    <ReveloLayout>
      <section
        className="page-banner-area pt-50 pb-35 rel z-1 bgs-cover"
        style={{ 
          backgroundImage: `url(${resortData.imageUrl})`,
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
              data-aos-offset={50}
            >
              {resortData.place}
            </h2>
          </div>
        
          <Link
            href={`/Booknow?destination=${encodeURIComponent(resortData.place)}&category=resorts&package_id=${encodeURIComponent(params.id)}&location=${encodeURIComponent(resortData.location)}&type=Resort`}
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
                data-aos-offset={50}
              >
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
              data-aos-offset={50}
            >
              <div className="tour-header-social mb-10">
                <a href="#">
                  <i className="far fa-share-alt" />
                  Share Resort
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
                <h3>{resortData.place}</h3>
                <p>{resortData.description}</p>
                {resortData.amenities && (
                  <div className="amenities mt-4">
                    <h4>Amenities</h4>
                    <ul className="list-unstyled">
                      {resortData.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <Subscribe />
    </ReveloLayout>
  );
};

export default ResortDetailsPage;