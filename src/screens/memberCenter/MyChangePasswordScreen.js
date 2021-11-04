import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

import icon_reminder from '../screensImages/member/icon_reminder.svg';

const MyChangePasswordScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='personalCenter_pwEdit_login minH900 '>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on' id='pwEdit_login'>
              <h2>{t('MyChangePasswordScreen.Sr_tab_title_1')}</h2>
            </li>
            <li id='pwEdit_withdraw'>
              <h2>{t('MyChangePasswordScreen.Sr_tab_title_2')}</h2>
            </li>
          </ul>
        </div>
        <div className='pwEdit_item'>
          <label>{t('MyChangePasswordScreen.PwEdit_item_1')}</label>
          <input
            id='oldPw'
            type='password'
            placeholder={t('MyChangePasswordScreen.PwEdit_item_PH_1')}
            name='oldPw'
          />
          <span className='pb_reminder2'>
            <img src={icon_reminder} alt='icon_reminder' />
            {t('MyChangePasswordScreen.Icon_reminder_1')}
          </span>
        </div>
        <div className='pwEdit_item'>
          <label>{t('MyChangePasswordScreen.PwEdit_item_2')}</label>
          <input
            id='newPw'
            type='password'
            placeholder={t('MyChangePasswordScreen.PwEdit_item_PH_2')}
            name='newPw'
          />
        </div>
        <div className='pwEdit_item'>
          <label>{t('MyChangePasswordScreen.PwEdit_item_3')}</label>
          <input
            id='oldPw'
            type='password'
            placeholder={t('MyChangePasswordScreen.PwEdit_item_PH_3')}
            name='oldPw'
          />
          <span className='pb_reminder2'>
            <img src={icon_reminder} alt='icon_reminder' />
            {t('MyChangePasswordScreen.Icon_reminder_2')}
          </span>
        </div>
        <div className='submitPW'>
          <a className='contentButton_1' href='/'>
            {t('MyChangePasswordScreen.ContentButton_1')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyChangePasswordScreen;
