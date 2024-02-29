import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

const MoneyWithdrawlScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='withdraw '>
        <div className='a_d_title'>
          <h2>{t('MoneyWithdrawlScreen.Title')}</h2>
        </div>
        <p>
          {t('MoneyWithdrawlScreen.AvailableMoney')}
          <span>598.02</span>
          {t('MoneyWithdrawlScreen.Coin')}
        </p>
        <p>
          <label className='w_d_from' htmlFor='w_d_from'>
            {t('MoneyWithdrawlScreen.WithdrawlTo')}
          </label>
          <input
            id='w_d_from'
            type='text'
            placeholder='879*****99 BANK OF AMER...'
            name='w_d_from'
          />
        </p>
        <p>
          <label htmlFor='w_d_amount'>
            {t('MoneyWithdrawlScreen.W_d_amount')}
          </label>
          <input
            id='w_d_amount'
            type='text'
            placeholder={t('MoneyWithdrawlScreen.W_d_amount_placeholder')}
            name='w_d_amount'
          />
        </p>
        <p>
          <label htmlFor='w_d_password'>
            {t('MoneyWithdrawlScreen.W_d_password')}
          </label>
          <input
            id='w_d_password'
            type='text'
            placeholder={t('MoneyWithdrawlScreen.W_d_password_placeholder')}
            name='w_d_password'
          />
        </p>
        <div className='w_button'>
          <a className='contentButton_1' href='/'>
            {t('MemberCenter_utils.Submit')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoneyWithdrawlScreen;
