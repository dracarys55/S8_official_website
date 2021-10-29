import React from 'react';
import './MemberCenterpage.css';

const MoneyWithdrawlScreen = () => {
  return (
    <div className='memberContent'>
      <div className='withdraw '>
        <div className='a_d_title'>
          <h2>取款</h2>
        </div>
        <p>
          可取金额:<span>598.02</span>元
        </p>
        <p>
          <label className='w_d_from' for='w_d_from'>
            取款至:
          </label>
          <input
            id='w_d_from'
            type='text'
            placeholder='879*****99 BANK OF AMER...'
            name='w_d_from'
          />
        </p>
        <p>
          <label for='w_d_amount'>取款金额:</label>
          <input
            id='w_d_amount'
            type='text'
            placeholder='请输入取款金额'
            name='w_d_amount'
          />
        </p>
        <p>
          <label for='w_d_password'>取款密码:</label>
          <input
            id='w_d_password'
            type='text'
            placeholder='请输入六位数取款密码'
            name='w_d_password'
          />
        </p>
        <div className='w_button'>
          <a className='contentButton_1' href='/'>
            提交
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoneyWithdrawlScreen;
