import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import './CenterLeftMenu.css';

const CenterLeftMenu = () => {
  return (
    <ul className='leftMenu'>
      <li>
        <LinkContainer to='/member/centerpage'>
          <a id='L1' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon1'>&#xe803;</i>
            中心首页
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
      </li>
      <li className=''>
        <LinkContainer to='/member/moneymanage'>
          <a id='L2' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon02'>&#xe801;</i>
            资金管理
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu'>
          <li className=''>
            <LinkContainer to='/member/moneymanage'>
              <a href='/' className='L2-1'>
                存款
              </a>
            </LinkContainer>
          </li>
          <li className=''>
            <LinkContainer to='/member/moneywithdrawal'>
              <a href='/' className='L2-2'>
                取款
              </a>
            </LinkContainer>
          </li>
          <li className=''>
            <LinkContainer to='/member/moneyrecord'>
              <a href='/' className='L2-3'>
                纪录查询
              </a>
            </LinkContainer>
          </li>
        </ul>
      </li>
      <li>
        <LinkContainer to='/member/myvipinfo'>
          <a id='L3' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon03'>&#xe802;</i>
            个人中心
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu'>
          <li>
            <LinkContainer to='/member/myvipinfo'>
              <a id='L3-1' href='/'>
                VIP专属
              </a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to='/member/myinfo'>
              <a id='L3-2' href='/'>
                个人信息
              </a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to='/member/mytext'>
              <a id='L3-3' href='/'>
                我的消息
              </a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to='/member/mychangepassword'>
              <a id='L3-4' href='/'>
                修改密码
              </a>
            </LinkContainer>
          </li>
        </ul>
      </li>
      <li>
        <LinkContainer to='/member/agentpromote'>
          <a id='L4' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon04'>&#xe800;</i>
            代理中心
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu'>
          <li>
            <LinkContainer to='/member/agentpromote'>
              <a id='L4-1' href='/'>
                推广赚钱
              </a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to='/member/agentfeedback'>
              <a id='L4-2' href='/'>
                反佣金额表
              </a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to='/member/agentteach'>
              <a id='L4-3' href='/'>
                推广教程
              </a>
            </LinkContainer>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default CenterLeftMenu;
