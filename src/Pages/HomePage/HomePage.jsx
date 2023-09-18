import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './homePage.scss';
import { useEffect, useState } from 'react';
import ItemList from '../../Components/ItemList/ItemList';

function HomePage() {
  const [isHomePage, setIsHomePage]=useState(false);
  useEffect(()=>{
    setIsHomePage(true);
  },[]);
 

  return (
    <>
      <div className='homePage'>
        <Nav/>
        <ItemList/>
      </div>
      <Footer isHomePage={isHomePage} setIsHomePage={setIsHomePage} />
    </>
  )
}

export default HomePage