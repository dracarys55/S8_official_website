import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterUserInfo.css';

import avatarDemo from '../componentsImages/avatarDemo.png';
import icon_phone from '../componentsImages/icon_phone.png';
import icon_mail from '../componentsImages/icon_mail.png';
import icon_sms from '../componentsImages/icon_sms.png';
import icon_coin from '../componentsImages/icon_coin.png';
import icon_reload from '../componentsImages/icon_reload.png';

const MemberCenterUserInfo = () => {
  const { t } = useTranslation();
  return (
    <div className='m_info'>
      <div className='container'>
        <div className='profile'>
          <div className='avatar'>
            <img src={avatarDemo} alt='' />
          </div>
          <div className='profileContent'>
            <div className='welcome'>
              <h3>{t('MemberCenterUserInfo.Welcome')}</h3>
              <h4>{t('MemberCenterUserInfo.Name')}</h4>
              <span className='vipTag'>{t('MemberCenterUserInfo.VipTag')}</span>
            </div>
            <div className='progressBar'>
              <div className='progressBarContent'></div>
            </div>
            <a className='editPW' href='/'>
              {t('MemberCenterUserInfo.EditPW')}
            </a>
            <div className='p_bottom'>
              <span>{t('MemberCenterUserInfo.P_bottom_1')}</span>
              <b>{t('MemberCenterUserInfo.P_bottom_2')}</b>
              <div className='icons'>
                <img src={icon_phone} alt='' />
                <img src={icon_mail} alt='' />
                <img src={icon_sms} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='moneyCount'>
          <h3>{t('MemberCenterUserInfo.MoneyCount')}</h3>
          <div className='moneyNum'>
            <img className='coin' src={icon_coin} alt='' />
            <h1>5.98</h1>
            <img className='reload' src={icon_reload} alt='' />
          </div>
          <div className='moneyFunc'>
            <a href='/'>{t('MemberCenterUserInfo.MoneyFunc_1')}</a>
            <a href='/'>{t('MemberCenterUserInfo.MoneyFunc_2')}</a>
            <a href='/'>{t('MemberCenterUserInfo.MoneyFunc_3')}</a>
          </div>
        </div>
        <div className='vipLevel'>
          <h3>{t('MemberCenterUserInfo.VipLevel')}</h3>
          <div className='vipProgress'>
            <span className='vipTag'>VIP1</span>
            <div className='progressBar'>
              <div className='progressBarContent'></div>
            </div>
            <span className='vipTag'>VIP2</span>
          </div>
          <div className='vipDesc'>
            {t('MemberCenterUserInfo.VipDesc_1')}
            <span className='M_color'>9000</span>
            {t('MemberCenterUserInfo.VipDesc_2')}
            <span className='L_color'>99255.20</span>
            {t('MemberCenterUserInfo.VipDesc_3')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCenterUserInfo;
