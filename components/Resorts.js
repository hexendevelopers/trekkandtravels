"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDXvfT1XtUs4Kj7VM7zQCt9Zc-w9c1Rp9Y",
  authDomain: "trekkandtravels-website.firebaseapp.com",
  databaseURL: "https://trekkandtravels-website-default-rtdb.firebaseio.com",
  projectId: "trekkandtravels-website",
  storageBucket: "trekkandtravels-website.appspot.com",
  messagingSenderId: "1051910823738",
  appId: "1:1051910823738:web:6f9a4c10d0b8c97c5b56a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Resorts = () => {
  const [resortsByLocation, setResortsByLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, 'Resorts'));
        
        if (snapshot.exists()) {
          const resortsData = snapshot.val();
          const groupedResorts = {};
          
          // Group resorts by location
          Object.entries(resortsData).forEach(([location, locationData]) => {
            groupedResorts[location] = Object.entries(locationData).map(([id, resortData]) => ({
              id,
              location,
              ...resortData
            }));
          });
          
          setResortsByLocation(groupedResorts);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resorts:", error);
        setLoading(false);
      }
    };

    fetchResorts();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <section>
      {Object.entries(resortsByLocation).map(([location, resorts]) => (
        <div key={location}>
          <div className="destinations-page-area pt-95 pb-90 rel z-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div
                    className="section-title text-center counter-text-wrap mb-50"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <SectionTitle title={`Best ${location} Resorts`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tour-grid-page rel z-2">
            <div className="container">
              <div className="row">
                {resorts.map((resort) => (
                  <div className="col-xl-4 col-md-6" key={resort.id}>
                    <div
                      className="destination-item tour-grid style-three bgc-lighter"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="image" style={{ height: '300px', overflow: 'hidden' }}>
                        <button className="heart">
                          <i className="fas fa-heart" />
                        </button>
                        <img 
                          src={resort.imageUrl} 
                          alt={resort.place}
                          style={{ 
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href={`/Resort-details/${resort.id}`}>
                            {resort.place}
                          </Link>
                        </h5>
                        <div className="tour-info">
                          <Link
                            href={`/Resort-details/${resort.id}`}
                            className="theme-btn style-two style-three"
                          >
                            <span data-hover="View Details">View Details</span>
                            <i className="fal fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Resorts;