import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import capturepicture from '../../Assets/Icons/capturepicture.svg';
import target from '../../Assets/Icons/target.svg';
import close from '../../Assets/Icons/close.svg';
import lushLensPlaceholder from '../../Assets/Images/lushLens_placeholder.png';
import './Camera.scss';
import FlashingMessage from './FlashingMessage'; // Import the FlashingMessage component
import '../Item/item.scss';

function Camera({ toggleCamera }) {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageCaptured, setImageCaptured] = useState(false);
  const [resultsTabExpanded, setResultsTabExpanded] = useState(false); // State for expanded results tab

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    const videoElement = videoRef.current;
    if (videoElement && videoElement.srcObject) {
      const stream = videoElement.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const displayCapturedImage = () => {
    setImageCaptured(true); // Set the state to indicate that an image is captured
  };

  useEffect(() => {
    startCamera(); // Start the camera when the component mounts

    return () => {
      // Clean up the camera stream when the component unmounts
      stopCamera();
    };
  }, []);

  const capture = () => {
    // Use the imported image path
    const imageSrc = lushLensPlaceholder;
    console.log('Line 49 capture function, this is the image src:', imageSrc);
    setCapturedImage(imageSrc); // Store the captured image in the state
    displayCapturedImage(); // Display the captured image
    stopCamera();
  };

  // Function to toggle results tab expansion
  const toggleResultsTab = () => {
    setResultsTabExpanded(!resultsTabExpanded);
    console.log('ResultsTabState:', resultsTabExpanded);
  };

  return (
    <div className="camera">
      {imageCaptured ? (
        <div>
          <img src={capturedImage} alt="Captured" className="camera__capturedImage" />
          <FlashingMessage /> {/* Render the flashing message */}
          {imageCaptured && (
            <div
              onClick={toggleResultsTab}
              className={`results-tab__${resultsTabExpanded ?
                'expanded' : 'collapsed'}`}
            >
              {/* Toggle results tab based on resultsTabExpanded state */}
              <div className='results-tab__lensResultsContainer'>
                Lens has found 2 results
              </div>

              {resultsTabExpanded ? (
                <>
                  <div className={`item-card ${resultsTabExpanded ? 'visible' : ''}`}>
                    <div className={'item-card__wrapper'}>
                      <div className="expandedItem">
                        <div className='expandedItem__boxLeft'>
                          <img
                            className="item__image"
                            src={require('../../Assets/Images/Frame 14.png')}
                            alt="soap bar"
                          />
                        </div>
                        <div className='expandedItem__boxCenter'>
                          <p className="expandedItem__title">NAME</p>
                          <p className="expandedItem__productDetails">PRODUCT</p>
                          <p className="expandedItem__productDetails">UPC: CODE</p>
                          <p className="expandedItem__productDetails">Quantity: XXX</p>
                          <p className="expandedItem__productDetails">XXX</p>
                        </div>
                        <div className='expandedItem__boxRight'>
                          <p className="expandedItem__price-weight">PRICE</p>
                          <svg
                            className="expandedItem__add-icon"
                            width="22"
                            height="19"
                            viewBox="0 0 22 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Icon"
                              d="M10.7501 4.35004L10.7501 15.15M17.0501 9.75004L4.45007 9.75004"
                              stroke="black"
                              strokeWidth="2.25"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="expandedItem">
                      <div className='expandedItem__boxLeft'>
                        <img
                          className="item__image"
                          src={require('../../Assets/Images/Frame 14.png')}
                          alt="soap bar"
                        />
                      </div>
                      <div className='expandedItem__boxCenter'>
                        <p className="expandedItem__title">NAME</p>
                        <p className="expandedItem__productDetails">PRODUCT</p>
                        <p className="expandedItem__productDetails">UPC: CODE</p>
                        <p className="expandedItem__productDetails">Quantity: XXX</p>
                        <p className="expandedItem__productDetails">XXX</p>
                      </div>
                      <div className='expandedItem__boxRight'>
                        <p className="expandedItem__price-weight">PRICE</p>
                        <svg
                          className="expandedItem__add-icon"
                          width="22"
                          height="19"
                          viewBox="0 0 22 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Icon"
                            d="M10.7501 4.35004L10.7501 15.15M17.0501 9.75004L4.45007 9.75004"
                            stroke="black"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}
        </div>
      ) : (
        <video ref={videoRef} autoPlay className="camera__video" />
      )}

      <Link
        to="/"
        onClick={() => {
          toggleCamera();
          stopCamera();
        }}
        className="camera__link-close"
      >
        <img src={close} alt="Close" className="camera__close" />
      </Link>

      <img src={target} alt="Target" className="camera__target" />

      {!imageCaptured && ( // Only show the capture button if an image is not captured  
        <img
          src={capturepicture}
          alt="Capture"
          className="camera__capture"
          onClick={capture}
        />
      )}
    </div>
  );
}

export default Camera;
