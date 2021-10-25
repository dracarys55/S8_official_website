import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import './Footer.css';

import th_sprite1 from '../components/componentsImages/th_sprite1.png';
import f_logo from '../components/componentsImages/f_logo.png';

const Footer = () => {
  return (
    <>
      <div className='area-1'>
        <img className='f_logo' src={f_logo} alt='logo' />
        <p className='text-light text'>易记域名: www.S8.com</p>
        <div className='text-light menu' href='/'>
          <a href=''>银行服务 </a>
          <a href=''>投诉建议 </a>
          <a href=''>加入收藏</a>
        </div>
      </div>
      <div className='footer-icons '>
        <div className='f_logos'>
          <div className='f_item00'></div>
          <div className='f_item01'></div>
          <div className='f_item02'></div>
          <div className='f_item03'></div>
          <div className='f_item04'></div>
          <div className='f_item05'></div>
          <div className='f_item06'></div>
          <div className='f_item07'></div>
          <div className='f_item08'></div>
          <div className='f_item09'></div>
          <div className='f_item10'></div>
          <div className='f_item11'></div>
          <div className='f_item12'></div>
          <div className='f_item13'></div>
        </div>
        <a href='/'>เกี่ยวกับเรา</a>
        <p>Copyright Reserved</p>
      </div>
    </>
  );
};

export default Footer;
