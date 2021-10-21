import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <>
      <Navbar bg='secondary' variant='dark' expand='lg'>
        <Container>
          <Nav className='me-auto'>
            <NavDropdown title='中文' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>中文</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>English</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>泰文</NavDropdown.Item>
            </NavDropdown>
            <p> 2021/10/21 15:24:40</p>
          </Nav>
          <Nav className='ms-auto'>
            <LinkContainer to='/login'>
              <Nav.Link className='button'>
                <button className='login'>登录</button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link className='button'>
                <button className='register'>注册</button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/bookmark'>
              <Nav.Link className='button'>
                <button className='bookmark'>收藏</button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand-name'>S8.com</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto '>
              <LinkContainer to='/'>
                <Nav.Link className='m-3'>首頁</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/anyGames'>
                <Nav.Link className='m-3'>
                  电子游艺 <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/boardGames'>
                <Nav.Link className='m-3'>
                  棋牌游戏 <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/fishingGames'>
                <Nav.Link className='m-3'>
                  捕鱼游戏 <i className='fas fa-caret-up'></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/fishingGames'>
                <Nav.Link className='m-3'>优惠活动</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Header;
