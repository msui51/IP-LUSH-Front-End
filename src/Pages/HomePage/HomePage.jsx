import React from 'react';
import Nav from '../../Components/Nav/Nav';
import './homePage.scss';
// import Camera from '../../Components/Camera/Camera';
import Footer from '../../Components/Footer/Footer';
import ItemList from '../../Components/ItemList/ItemList';
import { ScrollArea } from '@mantine/core';


function HomePage() {

  return (
    <>
      {/* <Camera /> */}
      <div className='homePage'>
        <div className='homePage__content-container'>
          <div className='homePage__left-side-wrapper'>
            <Nav />
            <div className='homePage__itemList-wrapper'>
            <ScrollArea>
              <ItemList />
            </ScrollArea>
            </div>
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