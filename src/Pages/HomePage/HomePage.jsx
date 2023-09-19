import React from 'react';
import Nav from '../../Components/Nav/Nav';
import './homePage.scss';
// import Camera from '../../Components/Camera/Camera';
import Footer from '../../Components/Footer/Footer';
import ItemList from '../../Components/ItemList/ItemList';
import OrderList from '../../Components/OrderList/OrderList';
import { ScrollArea } from '@mantine/core';
import itemData from '../../Assets/Data/test.json';
import { useState, useEffect } from 'react';

function HomePage() {
  const [isHomePage, setIsHomePage]=useState(false);
  useEffect(()=>{
    setIsHomePage(true);
  },[]);

  return (
    <>
      {/* <Camera /> */}
      <div className='homePage'>
        <div className='homePage__content-container'>
          <div className='homePage__left-side-wrapper'>
            <Nav />
            <ScrollArea>
              <ItemList />
            </ScrollArea>
          </div>
          <div className='homePage__right-side-wrapper'>
            <OrderList 
                itemData={itemData}
            />
          </div>
        </div>
      
      </div>
      <Footer isHomePage={isHomePage} setIsHomePage={setIsHomePage}/>
    </>
  )
}

export default HomePage