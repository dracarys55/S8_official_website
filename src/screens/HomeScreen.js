import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Carousel from '../components/Slider';

//官方網站首頁
const HomeScreen = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Carousel />
    </>
  );
};

export default HomeScreen;
