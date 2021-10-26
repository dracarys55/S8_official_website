import React from 'react';
import './MemberCenterUserInfo.css';

import avatarDemo from './componentsImages/avatarDemo.png';
import icon_phone from './componentsImages/icon_phone.png';
import icon_mail from './componentsImages/icon_mail.png';
import icon_sms from './componentsImages/icon_sms.png';
import icon_coin from './componentsImages/icon_coin.png';
import icon_reload from './componentsImages/icon_reload.png';

const MemberCenterUserInfo = () => {
  return (
    <div className='m_info'>
      <div className='container'>
        <div className='profile'>
          <div className='avatar'>
            <img src={avatarDemo} alt='' />
          </div>
          <div className='profileContent'>
            <div className='welcome'>
              <h3>欢迎您,</h3>
              <h4>Kim</h4>
              <span className='vipTag'>VIP1</span>
            </div>
            <div className='progressBar'>
              <div className='progressBarContent'></div>
            </div>
            <a className='editPW' href='/'>
              更改密码
            </a>
            <div className='p_bottom'>
              <span>账号安全等级</span>
              <b>低</b>
              <div className='icons'>
                <img src={icon_phone} alt='' />
                <img src={icon_mail} alt='' />
                <img src={icon_sms} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='moneyCount'>
          <h3>钱包馀额</h3>
          <div className='moneyNum'>
            <img className='coin' src={icon_coin} alt='' />
            <h1>5.98</h1>
            <img className='reload' src={icon_reload} alt='' />
          </div>
          <div className='moneyFunc'>
            <a href='/'>存款</a>
            <a href='/'>取款</a>
            <a href='/'>交易纪录</a>
          </div>
        </div>
        <div className='vipLevel'>
          <h3>会员VIP等级</h3>
          <div className='vipProgress'>
            <span class='vipTag'>VIP1</span>
            <div className='progressBar'>
              <div className='progressBarContent'></div>
            </div>
            <span className='vipTag'>VIP2</span>
          </div>
          <div className='vipDesc'>
            还需<span class='M_color'>9000</span>存款和
            <span className='L_color'>99255.20</span>投注额
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCenterUserInfo;
