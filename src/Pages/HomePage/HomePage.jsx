import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './homePage.scss';
import { useEffect, useState } from 'react';

function HomePage() {
  const [isHomePage, setIsHomePage]=useState(false);
  useEffect(()=>{
    setIsHomePage(true);
  },[]);
 

  return (
    <>
      <div className='homePage'>
        <Nav/>
      </div>
      <Footer isHomePage={isHomePage} setIsHomePage={setIsHomePage} />
    </>
  )
}

export default HomePage