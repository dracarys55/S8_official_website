import React from 'react';
import './MemberCenterpage.css';

const MyInfoScreen = () => {
  return (
    <div className='memberContent'>
      <div className='personalCenter_msg_myInfo minH900 '>
        <div className='a_d_title pt_0'>
          <h2>个人资料</h2>
        </div>
        <div className='myInfo_profile'>
          <div className='profile_item'>
            <label>真实姓名 :</label>
            <input id='name' type='text' placeholder='请输入真实姓名' />
          </div>
          <div className='profile_item'>
            <label>电子邮箱 :</label>
            <input id='mail' type='email' placeholder='选填' />
          </div>
          <div className='profile_item'>
            <label>生日 :</label>
            <input id='datepicker' type='text' placeholder='dd/mm/yyyy' />
          </div>
          <div className='profile_item'>
            <label>Line ID :</label>
            <input id='lineID' type='text' placeholder='Line ID' />
          </div>
          <div className='profile_item'>
            <label>手机号码 :</label>
            <input id='phone' type='number' placeholder='请输入手机号码' />
          </div>
          <div className='profile_item'>
            <label>Facebook :</label>
            <input id='FBID' type='text' placeholder='请输入 Facebook ID' />
          </div>
        </div>
        <div className='profile_submit'>
          <a className='contentButton_1' href='/'>
            保存
          </a>
        </div>
        <div className='bank_card_part'>
          <div className='a_d_title'>
            <h2>银行卡资料</h2>
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
