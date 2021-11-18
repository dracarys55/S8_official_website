import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

import label_hot from '../screensImages/label_hot.png';

const MoneyManageScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='deposit_bankCard'>
        <div className='d_bc_part1'>
          <div className='paymentMethod'>
            <span>{t('MoneyManageScreen.PaymentMethod')}</span>
            <button className='on' id='onlinepayment'>
              <div className='demo-icon-m icon-icon_onlinepayment'></div>
              <span>{t('MoneyManageScreen.OnlinePayment')}</span>
            </button>
            <button id='alipay'>
              <div className='demo-icon-m icon-icon_alipay'></div>
              <span>{t('MoneyManageScreen.AliPay')}</span>
            </button>
          </div>
          <div className='paymentChannel'>
            <span>{t('MoneyManageScreen.PaymentChannel')}</span>
            <button>
              <div className='demo-icon-m icon-icon_onlinepayment'></div>
              <span>{t('MoneyManageScreen.OnlineBankpayment')}</span>
              <img src={label_hot} alt='label_hot' />
            </button>
          </div>
          <div className='payeeBank'>
            <span>{t('MoneyManageScreen.PayeeBank')}</span>
            <div className='p_b_list'>
              <div className='p_b_Name'>
                <img src='img/member/icon_bank.svg' alt='' />
                krungusri bank
              </div>
              <div className='p_b_account'>
                0471597309
                <button>{t('MoneyManageScreen.Copy')}</button>
              </div>
              <div className='p_b_account'>
                Squpit maomordee
                <button>{t('MoneyManageScreen.Copy')}</button>
              </div>
              <div className='p_b_account'>
                7741072703
                <button>{t('MoneyManageScreen.Copy')}</button>
              </div>
            </div>
            <span className='pb_reminder1'>
              <img src='img/member/icon_reminder.svg' alt='' />
              {t('MoneyManageScreen.Pb_reminder1')}
            </span>
          </div>
          <div className='savingAmount'>
            <span>{t('MoneyManageScreen.SavingAmount')}</span>
            <input
              id='pb_from'
              type='text'
              placeholder={t('MoneyManageScreen.SavingAmountPlaceHolder')}
              name='pb_from'
            />
            <span className='pb_reminder2'>
              <img src='img/member/icon_reminder.svg' alt='' />
              {t('MoneyManageScreen.Pb_reminder2')}
            </span>
          </div>
          <div className='upload'>
            <label htmlFor='payVerify'>
              {t('MoneyManageScreen.PayVerify')}
            </label>
            <div className='uploadBg'>
              {/* <img id='payVerifyImg' /> */}
              <div className='uploadBox'>
                <input
                  type='file'
                  id='payVerify'
                  name='payVerify'
                  accept='image/gif, image/jpeg, image/png'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='d_bc_button'>
          <a className='contentButton_1' href='/'>
            {t('MemberCenter_utils.Submit')}
          </a>
        </div>
        <div className='d_bc_info'>
          <h3>{t('MoneyManageScreen.D_bc_info_title')}</h3>
          <ol>
            <li>{t('MoneyManageScreen.D_bc_info_li_1')}</li>
            <li>{t('MoneyManageScreen.D_bc_info_li_2')}</li>
            <li>{t('MoneyManageScreen.D_bc_info_li_3')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MoneyManageScreen;
