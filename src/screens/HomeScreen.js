import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Carousel from '../components/Slider';
import ActicyBlock from '../components/ActicyBlock';
import './HomeScreen.css';

import acticyBlockImage1 from '../components/componentsImages/area_1_block1.png';
import acticyBlockImage2 from '../components/componentsImages/area_1_block2.png';
import acticyBlockImage3 from '../components/componentsImages/area_1_block3.png';
import area_2_pic from '../screens/screensImages/area_2_pic.png';
import area_2_qrcode from '../screens/screensImages/area_2_qrcode.png';
import area_2_html5 from '../screens/screensImages/area_2_html5.png';

//官方網站首頁
const HomeScreen = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Carousel />
      <section className='ActicyBlocks'>
        <ActicyBlock
          backgroundImage={acticyBlockImage1}
          title={'新会员优惠'}
          content={'更多优惠尽在VIP'}
        />
        <ActicyBlock
          backgroundImage={acticyBlockImage2}
          title={'电子游戏专属优惠'}
          content={'电子游艺专属存款送25%优惠'}
        />
        <ActicyBlock
          backgroundImage={acticyBlockImage3}
          title={'真人视讯专属优惠'}
          content={'会员首笔存款得30％的奖金'}
        />
      </section>
      <div className='area-2'>
        <img src={area_2_pic} alt='' />
        <div className='textSection'>
          <h3 className='text-light area-2'>极致流畅 触手可及</h3>
          <p className='text-light area-2'>
            全球首家一体化娱乐原生APP，海量体育、电竞赛事更有真人娱乐、棋牌游戏
            <br />
            彩票投注、电子游艺等娱乐项目。扫码下载，立即掌中体验
          </p>
          <div className='pics'>
            <div className='pic'>
              <img src={area_2_qrcode} alt='' className='qrCode' />
              <p className='text-light area-2'>
                {' '}
                扫码下载APP <br /> iOS & Android
              </p>
            </div>
            <div className='pic'>
              <img src={area_2_html5} alt='' className='h5' />
              <p className='text-light area-2'>
                无需下载直接访问 <br /> http://127.0.0.1:8081/
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
