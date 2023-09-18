import React from 'react';
import Nav from '../../Components/Nav/Nav';
import './homePage.scss';
import Camera from '../../Components/Camera/Camera';
import Footer from '../../Components/Footer/Footer';

function HomePage() {

  return (
    <>
      {/* <Camera /> */}
      <div className='homePage'>
        <div className='homePage__content-container'>
          <div className='homePage__left-side-wrapper'>
            <Nav />
            LEFT SIDE
          </div>
          <div className='homePage__right-side-wrapper'>
            RIGHT SIDE
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  )
}

export default HomePage