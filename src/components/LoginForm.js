import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import FacebookLogin from 'react-facebook-login';
import './LoginForm.css';

import close_w from './componentsImages/close_w.svg';
/* import FbBtn from './componentsImages/FbBtn.png'; */
import LineBtn from './componentsImages/LineBtn.png';

const LoginForm = ({ handleClose, show }) => {
  const clientId = '1656221321';
  const redirectUrl = 'http://localhost:5158/redirect.html';
  const url =
    'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' +
    clientId +
    '&redirect_uri=' +
    redirectUrl +
    '&state=line&scope=profile%20openid%20email&nonce=09876xyz';
  const { t } = useTranslation();
  /* const [data, setData] = useState({}); */
  /*  const [login, setLogin] = useState(false);
  const [picture, setPicture] = useState(''); */

  const responseFacebook = (response) => {
    console.log(response, 'success');
    /* setData(response); */
    /* setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }  */
  };
  /*  const responseLine = (response) => {
    console.log(response, 'success');
  }; */

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName='loginBox'
        animation={false}
      >
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
          <LinkContainer to='/member/center'>
            <input
              className='submit'
              type='button'
              value={t('LoginForm.Submit')}
              onClick={handleClose}
            />
          </LinkContainer>
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
          <div className='divide'>
            <hr />
            <p>{t('LoginForm.Divide')}</p>
          </div>
          <div className='socialLinks'>
            {/* <a href='/'>
              <img class='close' src={FbBtn} alt='' />
            </a> */}
            <FacebookLogin
              appId='143911454488249'
              autoLoad={false}
              fields='name,email,picture'
              scope='public_profile'
              callback={responseFacebook}
              cssClass='facebookLogin'
              textButton=''
            />
            <a href={url} target='_blank' rel='noreferrer'>
              <img className='close' src={LineBtn} alt='' />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
