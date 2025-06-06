"use client";
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase/config';
import styles from './FirebasePopup.module.css';

const FirebasePopup = () => {
  const [popupData, setPopupData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Check if popup has been shown in this session
    if (typeof window !== 'undefined') {
      const hasShownPopup = localStorage.getItem('popupShown');
      if (hasShownPopup) {
        return; // Don't show popup if it's already been shown
      }
    }
    
    // Set up Firebase listener for popup data
    const popupRef = ref(database, 'activePopup');

    const handlePopupData = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        
        if (data.isActive === true) {
          setPopupData(data);
          // Show popup after 5 seconds and mark as shown
          setTimeout(() => {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
          }, 5000);
        }
      }
    };

    // Set up real-time listener
    const unsubscribe = onValue(popupRef, handlePopupData, (error) => {
      console.error('Error fetching popup data:', error);
    });

    // Cleanup subscription
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (showPopup) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [showPopup]);

  if (!showPopup || !popupData) return null;

  return (
    <div className={styles.popupOverlay} onClick={(e) => {
      // Close when clicking outside the popup
      if (e.target === e.currentTarget) handleClose();
    }}>
      <div className={styles.popupContent}>
        <button 
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>
        <img 
          src={popupData.image} 
          alt="Promotional Popup" 
          className={styles.popupImage}
          onError={(e) => {
            console.error('Failed to load popup image');
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default FirebasePopup;
