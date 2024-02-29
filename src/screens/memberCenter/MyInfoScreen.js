import React from 'react';
import './MemberCenterpage.css';
import { useTranslation } from 'react-i18next';

const MyInfoScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='personalCenter_msg_myInfo minH900 '>
        <div className='a_d_title pt_0'>
          <h2>{t('MyInfoScreen.Title')}</h2>
        </div>
        <div className='myInfo_profile'>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_1')}</label>
            <input
              id='name'
              type='text'
              placeholder={t('MyInfoScreen.Profile_item_PH_1')}
            />
          </div>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_2')}</label>
            <input
              id='mail'
              type='email'
              placeholder={t('MyInfoScreen.Profile_item_PH_2')}
            />
          </div>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_3')}</label>
            <input
              id='datepicker'
              type='text'
              placeholder={t('MyInfoScreen.Profile_item_PH_3')}
            />
          </div>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_4')}</label>
            <input
              id='lineID'
              type='text'
              placeholder={t('MyInfoScreen.Profile_item_PH_4')}
            />
          </div>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_5')}</label>
            <input
              id='phone'
              type='number'
              placeholder={t('MyInfoScreen.Profile_item_PH_5')}
            />
          </div>
          <div className='profile_item'>
            <label>{t('MyInfoScreen.Profile_item_6')}</label>
            <input
              id='FBID'
              type='text'
              placeholder={t('MyInfoScreen.Profile_item_PH_6')}
            />
          </div>
        </div>
        <div className='profile_submit'>
          <a className='contentButton_1' href='/'>
            {t('MyInfoScreen.ContentButton_1')}
          </a>
        </div>
        <div className='bank_card_part'>
          <div className='a_d_title'>
            <h2> {t('MyInfoScreen.A_d_title')}</h2>
          </div>
          <div className='bank_card noBind'>
            <div className='bc_avatar'></div>
            <div className='bankname'>
              <h3>
                BANK OF AMERICA....<a href='/'>更换</a>
              </h3>
              <h4>借记卡</h4>
            </div>
            <div className='card_num'>897*****99</div>
            <div className='card_user'>Sansan Kim</div>
          </div>
        </div>
        {/* 點擊跳出 myInfo_pop */}
        {/*    <div class='myInfo_pop popUp' id='bcBind'>
          <div class='bc_popBox'>
            <div class='popHead'>
              绑定银行卡
              <a href=''>
                <img class='close' src='img/close-w.svg' alt='' />
              </a>
            </div>
            <div class='popContent'>
              <div class='profile_item'>
                <label> 持卡人姓名:</label>
                <input id='name' type='text' value='Sansan Kim' />
              </div>
              <div class='profile_item'>
                <label>银行卡号:</label>
                <input id='cardNum' type='text' placeholder='请输入银行卡号' />
              </div>
              <div class='profile_item'>
                <label>银行名称:</label>
                <select name='bank'>
                  <option>請選擇</option>
                  <option>XXXX银行</option>
                  <option>XXXX银行</option>
                  <option>XXXX银行</option>
                </select>
              </div>
              <div class='profile_item'>
                <label>取款密码:</label>
                <input
                  id='getPW'
                  type='password'
                  placeholder='设置六位数的取款密码'
                />
              </div>
              <div class='profile_item'>
                <label>开户支行:</label>
                <input
                  id='bankBranch'
                  type='text'
                  placeholder='请输入支行名称'
                />
              </div>
              <h5>
                银行帐户持有人姓名必须与注册时输入的姓名一致，否则无法申请提款!
              </h5>
              <div class='profile_submit'>
                <a class='contentButton_1' href='#'>
                  完成
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyInfoScreen;
