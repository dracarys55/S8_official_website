import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './LoginForm.css';

import close_w from './componentsImages/close_w.svg';
import FbBtn from './componentsImages/FbBtn.png';
import LineBtn from './componentsImages/LineBtn.png';

const LoginForm = ({ handleClose, show, handleShow, handleSubmitShow }) => {
  const change = () => {
    handleClose();
    /* handleSubmitShow(); */
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} dialogClassName='loginBox'>
        <Modal.Title className='popHead'>
          会员安全登录
          <a href='#' className='closeBtn' onClick={handleClose}>
            <img src={close_w} alt='' className='close' />
          </a>
        </Modal.Title>

        <div className='popContent'>
          <div class='inputGroup account'>
            <input type='text' placeholder='游戏帐户' />
            {/* <div class='errorMsg'>账号有误！</div> */}
          </div>
          <div class='inputGroup pw'>
            <input type='password' placeholder='输入密码' />
            {/*  <div class='errorMsg'>密码有误！</div> */}
          </div>
          <a href='/member/center'>
            <input class='submit' type='submit' value='登录' />
          </a>

          <div class='inputOther'>
            <div class='flle'>
              <a class='forgotPW' href='/'>
                忘记密码
              </a>
            </div>
            <div class='flri'>
              <p>还没有帐号 ?</p>
              <a class='register' href='/' onClick={change}>
                立即注册
              </a>
            </div>
          </div>
          <div class='divide'>
            <hr />
            <p>透过社群帐号快速登录</p>
          </div>
          <div class='socialLinks'>
            <a href=''>
              <img class='close' src={FbBtn} alt='' />
            </a>
            <a href=''>
              <img class='close' src={LineBtn} alt='' />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
