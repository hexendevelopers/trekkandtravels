"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../../firebase/config';

const HomeFamilyPackages = () => {
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
          setPackages(packagesArray.slice(0, 8)); // Only show first 4 packages
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
          <div className="col-xxl-3 col-xl-4 col-md-6" key={pkg.id}>
            <div
              className="destination-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <div className="ratting">
                  <i className="fas fa-star" /> 4.8
                </div>
                <button className="heart">
                  <i className="fas fa-heart" />
                </button>
                <img src={pkg.imageUrl} alt={pkg.place} />
              </div>
              <div className="content">
                
                <h5>
                  <Link href={`/tour-details/${pkg.id}?category=holiday packages`}>
                    {pkg.place}
                  </Link>
                </h5>
                <span className="time">{pkg.days} Days</span>
              </div>
              <div className="destination-footer">
                <span className="price">
                  <span>₹{pkg.price}</span>
                </span>
                <Link 
                  href={`/tour-details/${pkg.id}?category=holiday packages`} 
                  className="read-more"
                >
                  Book Now 
                  <i className="fal fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
};
    
export default HomeFamilyPackages;