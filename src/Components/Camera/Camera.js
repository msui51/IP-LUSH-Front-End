import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import capturepicture from '../../Assets/Icons/capturepicture.svg';
import target from '../../Assets/Icons/target.svg';
import close from '../../Assets/Icons/close.svg';
import Webcam from 'react-webcam';
import './Camera.scss';

function Camera( { toggleCamera} ) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  

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

  useEffect(() => {
    startCamera(); // Start the camera when the component mounts

    return () => {
      // Clean up the camera stream when the component unmounts
      stopCamera();
    };
  }, []);

  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Handle the captured image data as needed (e.g., send it to a server).
    console.log(imageSrc);
  };


  return (
    <div className='camera'>

        <video ref={videoRef} autoPlay className='camera__video' />  

        <Link to='/' onClick={() => {toggleCamera(); stopCamera();}} className='camera__link-close'>
          <img src={close} className='camera__close' />
        </Link>
        
        <img src={target} className='camera__target' />
        
        <Link to='/checkout' onClick={() => {stopCamera()}} className='camera__link-capture' >
          <img src={capturepicture} className='camera__capture' />
        </Link>

    </div>
  );
}

export default Camera;