import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Camera from '../../Components/Camera/Camera';
import Footer from '../../Components/Footer/Footer';
import ItemList from '../../Components/ItemList/ItemList';
import OrderList from '../../Components/OrderList/OrderList';
import { ScrollArea } from '@mantine/core';
import './homePage.scss';


function HomePage() {

  return (
    <>
      <Camera />
      {/* <div className='homePage'>
        <div className='homePage__content-container'>
          <div className='homePage__left-side-wrapper'>
            <Nav />
            <ScrollArea>
              <ItemList />
            </ScrollArea>
          </div>
          <div className='homePage__right-side-wrapper'>
            <OrderList />
          </div>
        </div>
      
      </div> */}
      <Footer />
    </>
  )
}

export default HomePage