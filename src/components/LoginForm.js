import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import './LoginForm.css';

import close_w from './componentsImages/close_w.svg';
import FbBtn from './componentsImages/FbBtn.png';
import LineBtn from './componentsImages/LineBtn.png';

const LoginForm = ({ handleClose, show, handleShow, handleSubmitShow }) => {
  /* const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }; */

  return (
    <div>
      <Modal show={show} onHide={handleClose} dialogClassName='loginBox'>
        <Modal.Title className='popHead'>
          会员安全登录
          <img src={close_w} alt='' className='close' onClick={handleClose} />
        </Modal.Title>

        <div className='popContent'>
          <div className='inputGroup account'>
            <input type='text' placeholder='游戏帐户' pattern='[a-zA-Z0-9]' />
            {/* <div class='errorMsg'>账号有误！</div> */}
          </div>
          <div className='inputGroup pw'>
            <input type='password' placeholder='输入密码' />
            {/*  <div class='errorMsg'>密码有误！</div> */}
          </div>
          <a href='/member/center'>
            <input className='submit' type='submit' value='登录' />
          </a>

          <div className='inputOther'>
            <div className='flle'>
              <a className='forgotPW' href='/'>
                忘记密码
              </a>
            </div>
            <div className='flri'>
              <p>还没有帐号 ?</p>
              <a className='register' href='/' onClick={handleClose}>
                立即注册
              </a>
            </div>
          </div>
          <div class='divide'>
            <hr />
            <p>透过社群帐号快速登录</p>
          </div>
          <div class='socialLinks'>
            <a href='/'>
              <img class='close' src={FbBtn} alt='' />
            </a>
            {/* <FacebookLogin
              appId='1027953054670202'
              autoLoad={false}
              fields='name,email,picture'
              scope='public_profile'
              callback={responseFacebook}
              icon='fa-facebook'
            /> */}

            <a href='/'>
              <img class='close' src={LineBtn} alt='' />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
