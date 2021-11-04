import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
/* import FacebookLogin from 'react-facebook-login'; */
import './LoginForm.css';

import close_w from './componentsImages/close_w.svg';
import FbBtn from './componentsImages/FbBtn.png';
import LineBtn from './componentsImages/LineBtn.png';

const LoginForm = ({ handleClose, show, handleShow, handleSubmitShow }) => {
  const { t } = useTranslation();
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
          {t('LoginForm.Title')}
          <img src={close_w} alt='' className='close' onClick={handleClose} />
        </Modal.Title>

        <div className='popContent'>
          <div className='inputGroup account'>
            <input
              type='text'
              placeholder={t('LoginForm.Account')}
              pattern='[a-zA-Z0-9]'
            />
            {/* <div class='errorMsg'>账号有误！</div> */}
          </div>
          <div className='inputGroup pw'>
            <input type='password' placeholder={t('LoginForm.Password')} />
            {/*  <div class='errorMsg'>密码有误！</div> */}
          </div>
          <a href='/member/center'>
            <input
              className='submit'
              type='submit'
              value={t('LoginForm.Submit')}
            />
          </a>

          <div className='inputOther'>
            <div className='flle'>
              <a className='forgotPW' href='/'>
                {t('LoginForm.ForgotPW')}
              </a>
            </div>
            <div className='flri'>
              <p>{t('LoginForm.Flri')}</p>
              <a className='register' href='/' onClick={handleClose}>
                {t('LoginForm.Register')}
              </a>
            </div>
          </div>
          <div class='divide'>
            <hr />
            <p>{t('LoginForm.Divide')}</p>
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
