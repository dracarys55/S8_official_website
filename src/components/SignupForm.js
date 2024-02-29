import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './SignupForm.css';

import captcha from './componentsImages/captcha.jpg';
import close_w from './componentsImages/close_w.svg';
const SignupForm = ({ handleSignupClose, signupshow }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Modal
        show={signupshow}
        onHide={handleSignupClose}
        dialogClassName='loginBox'
        animation={false}
      >
        <Modal.Title className='popHead'>
          {t('SignupForm.Title')}
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
            <input type='text' placeholder={t('SignupForm.Account')} />
            {/*  <div class='errorMsg'>账号有误</div> */}
          </div>
          <div className='inputGroup pw require'>
            <input type='password' placeholder={t('SignupForm.Password')} />
            {/* <div class='errorMsg'>密码有误！</div> */}
          </div>
          <div className='inputGroup confirmPw require'>
            <input type='password' placeholder={t('SignupForm.ConfirmPw')} />
            {/* <div className='errorMsg'></div> */}
          </div>
          <div className='inputGroup name require'>
            <input type='text' placeholder={t('SignupForm.Name')} />
            {/*  <div class='errorMsg'></div> */}
          </div>
          <div className='inputGroup imgVerify  require'>
            <input type='text' placeholder={t('SignupForm.ImgVerify')} />
            {/* <div class='errorMsg'></div> */}
            <img src={captcha} alt='' />
          </div>

          <div className='inputGroup phone require'>
            <input type='text' placeholder={t('SignupForm.Phone')} />
            {/* <div class='errorMsg'></div> */}
            {/* <div class='sendAgain'></div> */}
          </div>
          <div className='inputGroup validate require'>
            <input type='text' placeholder={t('SignupForm.Validate')} />
            {/* <div class='errorMsg'></div> */}
          </div>
          <div className='inputGroup email require'>
            <input type='email' placeholder={t('SignupForm.Email')} />
            <div className='errorMsg'></div>
          </div>

          <input
            className='submit'
            type='submit'
            value={t('SignupForm.Submit')}
          />
          <div className='inputOther'>
            <label htmlFor='rights'>
              <input type='checkbox' id='rights' />
              {t('SignupForm.Rights')}
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignupForm;
