import { Component } from 'react';
import Slider from 'react-slick';
import './Slider.css';

import img1 from '../sliderImages/firstRecharge.jpg';
import img2 from '../sliderImages/getBackMoney.jpg';
import img3 from '../sliderImages/rechargeBack.jpg';
import shadow from '../sliderImages/kvShadow.jpg';

//把四張圖片放入一個陣列 並依序給予個別屬性
const images = [
  {
    id: '1',
    alt: 'Cannon Camera',
    url: img1, //對應到上面 引入的 img1
    href: '',
  },
  {
    id: '2',
    alt: 'Airpods ',
    url: img2, //對應到上面 引入的 img2
    href: '',
  },
  {
    id: '3',
    alt: 'Playstation 4 PRO',
    url: img3, //對應到上面 引入的 img3
    href: '',
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      //對應到下面的 settings 參數 給予從 react-slick 引入的 Slider 使用
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      className: 'slides',
      pauseOnHover: false,
    };

    return (
      <section>
        <Slider {...settings}>
          {/* 從 react-slick 引入的 Slider */}
          {images.map((image) => {
            //對每一個 images進行以下動作
            return (
              <div className='wrapper' key={image.id}>
                {/*連結另開新視窗*/}
                <a href={image.href} rel='noreferrer' target='_blank'>
                  <img className='sliderImg' src={image.url} alt={image.alt} />
                </a>
              </div>
            );
          })}
        </Slider>
        <div className='shadow'>
          <img src={shadow} className='shadow' alt='/' />
        </div>
      </section>
    );
  }
}
