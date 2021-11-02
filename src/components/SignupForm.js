import React from 'react';
import { Modal } from 'react-bootstrap';
import './SignupForm.css';

import captcha from './componentsImages/captcha.jpg';
import close_w from './componentsImages/close_w.svg';
const SignupForm = ({ handleSignupClose, signupshow }) => {
  return (
    <div>
      <Modal
        show={signupshow}
        onHide={handleSignupClose}
        dialogClassName='loginBox'
      >
        <Modal.Title className='popHead'>
          会员注册
          <img
            src={close_w}
            alt=''
            className='close'
            onClick={handleSignupClose}
          />
        </Modal.Title>

        <a href='/'>
          <img className='close' src='img/close-w.svg' alt='' />
        </a>
        <div className='popContent'>
          <div className='inputGroup account OK require'>
            <input type='text' placeholder='帐号:6-12位的字母加数字的组合' />
            {/*  <div class='errorMsg'>账号有误</div> */}
          </div>
          <div className='inputGroup pw require'>
            <input
              type='password'
              placeholder='密码:6-12位的字母加数字的组合'
            />
            {/* <div class='errorMsg'>密码有误！</div> */}
          </div>
          <div className='inputGroup confirmPw require'>
            <input
              type='password'
              placeholder='确认密码:6-12位的字母加数字的组合'
            />
            {/* <div className='errorMsg'></div> */}
          </div>
          <div className='inputGroup name require'>
            <input
              type='text'
              placeholder='真实姓名:名字必须与您存提款的银行帐户名字相同'
            />
            {/*  <div class='errorMsg'></div> */}
          </div>
          <div className='inputGroup imgVerify  require'>
            <input type='text' placeholder='请输入图片验证码' />
            {/* <div class='errorMsg'></div> */}
            <img src={captcha} alt='' />
          </div>

          <div className='inputGroup phone require'>
            <input type='text' placeholder='联系电话:请填写您的手机号码' />
            {/* <div class='errorMsg'></div> */}
            {/* <div class='sendAgain'></div> */}
          </div>
          <div class='inputGroup validate require'>
            <input type='text' placeholder='输入手機验证码' />
            {/* <div class='errorMsg'></div> */}
          </div>
          <div class='inputGroup email require'>
            <input type='email' placeholder='电子信箱:请填写您的电子邮箱' />
            <div class='errorMsg'></div>
          </div>

          <input class='submit' type='submit' value='立即注册' />
          <div class='inputOther'>
            <label for='rights'>
              <input type='checkbox' id='rights' />
              我已经年满18岁，且在此网站所有活动并没有牴触本人所在国家所管辖的法律
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignupForm;
