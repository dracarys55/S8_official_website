import React from 'react';
import './MemberCenterpage.css';

import icon_reminder from '../screensImages/member/icon_reminder.svg';

const MyChangePasswordScreen = () => {
  return (
    <div className='memberContent'>
      <div className='personalCenter_pwEdit_login minH900 '>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on' id='pwEdit_login'>
              <h2>登录密码</h2>
            </li>
            <li id='pwEdit_withdraw'>
              <h2>取款密码</h2>
            </li>
          </ul>
        </div>
        <div className='pwEdit_item'>
          <label>旧登录密码 :</label>
          <input
            id='oldPw'
            type='password'
            placeholder='请输入旧登录密码'
            name='oldPw'
          />
          <span className='pb_reminder2'>
            <img src={icon_reminder} alt='icon_reminder' />
            旧登录密码不正确。
          </span>
        </div>
        <div className='pwEdit_item'>
          <label>新登录密码 :</label>
          <input
            id='newPw'
            type='password'
            placeholder='请输入6位数字的新登录密码'
            name='newPw'
          />
        </div>
        <div className='pwEdit_item'>
          <label>重复新密码 :</label>
          <input
            id='oldPw'
            type='password'
            placeholder='请确认新登录密码'
            name='oldPw'
          />
          <span className='pb_reminder2'>
            <img src={icon_reminder} alt='icon_reminder' />
            两次输入的新密码不相同。
          </span>
        </div>
        <div className='submitPW'>
          <a className='contentButton_1' href='/'>
            确认修改
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyChangePasswordScreen;
