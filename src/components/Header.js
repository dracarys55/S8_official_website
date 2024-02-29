import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './Header.css';

import logo from './componentsImages/logo.png';
import icon_lang_cn from './componentsImages/icon_lang_cn.png';
import icon_lang_en from './componentsImages/icon_lang_en.png';
import icon_lang_th from './componentsImages/icon_lang_th.png';
import icon_lang_vi from './componentsImages/icon_lang_vi.png';

const Header = ({ handleShow, handleSignupShow }) => {
  const [dropDownTitle, setDropDownTitle] = useState('中文');
  const [icon, setIcon] = useState(icon_lang_cn);
  /*t, i18n 不可隨意更改   */
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  /* <img className='country_icon' src={icon_lang_cn} alt='' /> */
  return (
    <>
      <Navbar
        bg='secondary'
        variant='dark'
        expand='lg'
        className='navbar-area-1'
      >
        <Container>
          <Nav className='me-auto'>
            <NavDropdown
              title={
                <>
                  <img className='country_icon' src={icon} alt='' />
                  {dropDownTitle}
                </>
              }
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item
                onClick={() => {
                  changeLanguage('zh');
                  setDropDownTitle('中文');
                  setIcon(icon_lang_cn);
                }}
              >
                <img className='country_icon' src={icon_lang_cn} alt='' />
                中文
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  changeLanguage('en');
                  setDropDownTitle('English');
                  setIcon(icon_lang_en);
                }}
              >
                <img className='country_icon' src={icon_lang_en} alt='' />
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  changeLanguage('th');
                  setDropDownTitle('ภาษาจีน');
                  setIcon(icon_lang_th);
                }}
              >
                <img className='country_icon' src={icon_lang_th} alt='' />
                ภาษาจีน
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  changeLanguage('vi');
                  setDropDownTitle('Tiếng Việt');
                  setIcon(icon_lang_vi);
                }}
              >
                <img className='country_icon' src={icon_lang_vi} alt='' />
                Tiếng Việt
              </NavDropdown.Item>
            </NavDropdown>
            <p>2021/10/21 15:24:40</p>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link className='button'>
              <button className='login' onClick={handleShow}>
                {t('Header.Login')}
              </button>
            </Nav.Link>
            <Nav.Link className='button'>
              <button className='register' onClick={handleSignupShow}>
                {t('Header.Register')}
              </button>
            </Nav.Link>
            <LinkContainer to='/bookmark'>
              <Nav.Link className='button'>
                <button className='bookmark'>{t('Header.Bookmark')}</button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand='lg' className='navbar-area2' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand-name'>
              <img src={logo} alt='' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto '>
              <LinkContainer to='/'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Home')}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/anyGames'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Electronic')}
                  <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/carding'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Board')} <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/fishing'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Fishing')} <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/tickets'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Lottery')}
                  <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to='/activities'>
                <Nav.Link className='m-3 navbar-item'>
                  {t('Header.Promotions')}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;