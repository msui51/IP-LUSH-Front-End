import React, { useState, useEffect } from 'react';
import Nav from '../../Components/Nav/Nav';
import Camera from '../../Components/Camera/Camera';
import Footer from '../../Components/Footer/Footer';
import ItemList from '../../Components/ItemList/ItemList';
import OrderList from '../../Components/OrderList/OrderList';
import { ScrollArea } from '@mantine/core';
import itemData from '../../Assets/Data/test.json';
import './homePage.scss';

function HomePage() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    setIsHomePage(true);

    // Function to continuously check the camera state
    const checkCameraState = () => {
      if (isCameraOn) {
        // Camera is on, do something
      } else {
        // Camera is off, do something else
      }
    };

    // Call the checkCameraState function on camera state changes
    checkCameraState();

    // Return a cleanup function to stop listening when the component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, [isCameraOn]); // Add isCameraOn as a dependency to re-run the effect when it changes

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  return (
    <>
      {isCameraOn && (
        <Camera toggleCamera={toggleCamera} className='homePage__camera'  />
      )}
      <div className='homePage__behind-camera'>

        <div className='homePage'>
          <div className='homePage__content-container'>
            <div className='homePage__left-side-wrapper'>
              <Nav toggleCamera={toggleCamera} />
              <ScrollArea>
                <ItemList />
              </ScrollArea>
            </div>
            <div className='homePage__right-side-wrapper'>
              <OrderList itemData={itemData} />
            </div>
          </div>
        </div>
        <Footer isHomePage={isHomePage} setIsHomePage={setIsHomePage} />
      </div>
      
    </>
  );
}

export default HomePage;
