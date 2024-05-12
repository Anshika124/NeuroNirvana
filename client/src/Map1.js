import React, { useState, useEffect } from 'react';
import './Map.css';
const apiKey = 'dAG8Wls_WHJYElj-fNG64rMInEQHZs3lKg3Z1gc3nVw'; // Replace with your actual API key

const Map1 = () => {
  const [hospitals, setHospitals] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLocating, setIsLocating] = useState(false); // State for location fetching
  const [num, setNum] = useState('+919152987821')

  const fetchHospitals = async (latitude, longitude) => {
    try {
      const url = `https://discover.search.hereapi.com/v1/discover?apikey=${apiKey}&at=${latitude},${longitude}&q=hospitals&limit=5`;
      const response = await fetch(url);
      const data = await response.json();
      const contactNumbers = data.items.reduce((acc, hospital) => {
        if (hospital.contacts && hospital.contacts.length > 0) {
          hospital.contacts[0].phone.forEach((contact) => {
            acc.push(contact.value);
          });
        }
        return acc;
      }, []);
      
      console.log(contactNumbers);
      setNum(contactNumbers[0]);
      setHospitals(data.items);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching hospitals.');
    }
  };

  const getLocation = async () => {
    setIsLocating(true); // Set locating state to true
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchHospitals(latitude, longitude);
          setIsLocating(false); // Set locating state to false after successful fetch
        },
        (error) => {
          console.error(error);
          setErrorMessage('Error fetching location.');
          setIsLocating(false); // Set locating state to false after error
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
      setIsLocating(false); // Set locating state to false if not supported
    }
  };

  const dialEmergency = () => {
    // Check for browser support for Phone Dialer API
    if (navigator.dialer) {
      navigator.dialer.dial(num); // Replace 'emergency' with actual emergency number
    } else {
      // Fallback for non-supporting browsers (open emergency number in dial pad)
      window.location.href = 'tel:'+num; // Replace 'emergency' with actual emergency number
    }
  };

  useEffect(() => {
    getLocation();
  }, []); // Empty dependency array to fetch location only once on component mount

  return (
    <section class="rightSection">
                        <div class="mainContainer">
                            <div class="header-mainContainer">
                                
                                <h4>EMERGENCY TAP BUTTON</h4>
                            </div>
                            <div class="main-mainContainer">
    <div className="hospitals-container">
      <h1>Hospitals Near You</h1>
      {isLocating && <p>Locating your position...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {hospitals.length > 0 && (
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id} className="hospital">
              <h2>{hospital.title}</h2>
              {hospital.address && <p>{hospital.address.label}</p>}
              {hospital.phone && <p>Phone: {hospital.phone}</p>}
              {hospital.href && <a href={hospital.href}>Contact Hospital</a>}
            </li>
          ))}
        </ul>
      )}
      <button onClick={dialEmergency}>Call Emergency Services</button>
      <button onClick={getLocation} disabled={isLocating}>
        {isLocating ? 'Locating...' : 'Find Hospitals Near Me'}
      </button>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Map1;