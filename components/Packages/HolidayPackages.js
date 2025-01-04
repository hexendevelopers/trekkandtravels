"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../../firebase/config';

const HolidayPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const packagesRef = ref(db, 'packages/holiday packages');
    
    onValue(packagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of objects into an array
        const packagesArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
          featured: value.featured || false
        }));
        setPackages(packagesArray);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center p-5">Loading packages...</div>;
  }

  return (
    <>
      <div className="row">
        {packages.map((pkg) => (
          <div className="col-xl-4 col-md-6" key={pkg.id}>
            <div
              className="destination-item tour-grid style-three bgc-lighter"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                {pkg.featured && <span className="badge bgc-pink">Featured</span>}
                <button className="heart">
                  <i className="fas fa-heart" />
                </button>
                <img src={pkg.imageUrl} alt={pkg.place} />
              </div>
              <div className="content">
                <div className="destination-header">
                  <div className="ratting">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fas fa-star" />
                    ))}
                  </div>
                </div>
                <h5>
                  <Link href={`/tour-details/${pkg.id}?category=holiday packages`}>
                    {pkg.place}
                  </Link>
                </h5>
                <div className="tour-info">
                  <div className="tour-info-item">
                    <i className="far fa-clock"></i>
                    <span>{pkg.days} Days</span>
                  </div>
                  
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>₹{pkg.price}</span> 
                  </span>
                  <Link
                    href={`/tour-details/${pkg.id}?category=holiday packages`}
                    className="theme-btn style-two style-three"
                  >
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HolidayPackages;