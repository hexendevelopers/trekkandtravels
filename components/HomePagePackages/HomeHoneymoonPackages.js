"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../../firebase/config';

const HomeHoneymoonPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const packagesRef = ref(db, 'packages/Honeymoon Packages');
    
    onValue(packagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const packagesArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
          featured: value.featured || false
        }));
        setPackages(packagesArray.slice(0, 8)); // Only show first 8 packages
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center p-5">Loading packages...</div>;
  }

  return (
    <>
      {packages.map((pkg) => (
        <div className="col-xl-3 col-md-6" key={pkg.id}>
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
              <img src={pkg.imageUrl} alt={pkg.place} style={{ height: '250px', objectFit: 'cover' }} />
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
                <Link href={`/tour-details/${pkg.id}?category=Honeymoon Packages`}>
                  {pkg.place}
                </Link>
              </h5>
              <div className="tour-info">
                <div className="tour-info-item">
                  <i className="far fa-clock"></i>
                  <span>{pkg.days} Days</span>
                </div>
                <div className="tour-info-item">
                  <i className="fas fa-indian-rupee-sign"></i>
                  <span>{pkg.price}</span>
                </div>
              </div>
              <div className="destination-footer">
                <span className="price">
                  <span>₹{pkg.price}</span> 
                </span>
                <Link
                  href={`/tour-details/${pkg.id}?category=Honeymoon Packages`} 
                  className="theme-btn style-two style-three"
                >
                  <span data-hover="Book Now">Book Now</span>
                  <i className="fal fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeHoneymoonPackages;