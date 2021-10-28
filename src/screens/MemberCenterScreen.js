import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemberCenterUserInfo from '../components/MemberCenterUserInfo';
import './MemberCenterScreen.css';

const MemberCenterScreen = () => {
  return (
    <div className='memberMain'>
      <MemberCenterUserInfo />
      <ul className='leftMenu'>
        <li>
          <a id='L1' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon1'></i>
            中心首页
            <div className='menu_arr'></div>
          </a>
        </li>
        <li className='act'>
          <a id='L2' href='/'>
            <i></i>
            资金管理
            <div className='menu_arr'></div>
          </a>
          <ul className='LMsubMenu'>
            <li className='act'>
              <a href='/' className='L2-1'>
                存款
              </a>
            </li>
            <li className='act'>
              <a href='/' className='L2-2'>
                取款
              </a>
            </li>
            <li className='act'>
              <a href='/' className='L2-3'>
                纪录查询
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MemberCenterScreen;
