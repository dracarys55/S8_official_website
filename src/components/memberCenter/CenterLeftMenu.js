import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

import './CenterLeftMenu.css';

const CenterLeftMenu = () => {
  const { t } = useTranslation();
  const [act_1, setAct_1] = useState(false);
  const [act_2, setAct_2] = useState(false);
  const [act_3, setAct_3] = useState(false);
  const [act_4, setAct_4] = useState(false);
  const [toggle, setToggle] = useState();

  const arr = [
    /*资金管理 */
    t('CenterLeftMenu.Deposit'),
    t('CenterLeftMenu.Moneywithdrawal'),
    t('CenterLeftMenu.Moneyrecord'),
    /* 个人中心 */
    t('CenterLeftMenu.ForVip'),
    t('CenterLeftMenu.Myinfo'),
    t('CenterLeftMenu.Mytext'),
    t('CenterLeftMenu.Mychangepassword'),
    /* 代理中心 */
    t('CenterLeftMenu.AgentpromoteMoney'),
    t('CenterLeftMenu.Agentfeedback'),
    t('CenterLeftMenu.Agentteach'),
  ];
  const linkarr = [
    /*资金管理 */
    '/member/moneymanage',
    '/member/moneywithdrawal',
    '/member/moneyrecord',
    /* 个人中心 */
    '/member/myvipinfo',
    '/member/myinfo',
    '/member/mytext',
    '/member/mychangepassword',
    /* 代理中心 */
    '/member/agentpromote',
    '/member/agentfeedback',
    '/member/agentteach',
  ];

  const handleOnClick = (index) => {
    setToggle(index);
  };
  const toggleClasses = arr.map((element, index) => {
    return (
      <li
        key={index}
        className={toggle === index ? 'act' : ''}
        onClick={() => handleOnClick(index)}
      >
        <LinkContainer to={linkarr[index]}>
          <a href='/' className='L2-1'>
            {element}
          </a>
        </LinkContainer>
      </li>
    );
  });

  return (
    <ul className='leftMenu'>
      <li
        className={act_1 ? 'act' : ''}
        onClick={() => {
          setAct_1(true);
          setAct_2(false);
          setAct_3(false);
          setAct_4(false);
        }}
      >
        <LinkContainer to='/member/center' onClick={() => setToggle('')}>
          <a id='L1' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon1'>&#xe803;</i>
            {t('CenterLeftMenu.Center')}
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
      </li>
      <li
        className={act_2 ? 'act' : ''}
        onClick={() => {
          setAct_1(false);
          setAct_2(true);
          setAct_3(false);
          setAct_4(false);
        }}
      >
        <LinkContainer to='/member/moneymanage' onClick={() => setToggle('')}>
          <a id='L2' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon02'>&#xe801;</i>
            {t('CenterLeftMenu.Moneymanage')}
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu'>{toggleClasses.slice(0, 3)}</ul>
      </li>
      <li
        className={act_3 ? 'act' : ''}
        onClick={() => {
          setAct_1(false);
          setAct_2(false);
          setAct_3(true);
          setAct_4(false);
        }}
      >
        <LinkContainer to='/member/myvipinfo' onClick={() => setToggle('')}>
          <a id='L3' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon03'>&#xe802;</i>
            {t('CenterLeftMenu.Myvipinfo')}
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu'>{toggleClasses.slice(3, 7)}</ul>
      </li>
      <li
        className={act_4 ? 'act' : ''}
        onClick={() => {
          setAct_1(false);
          setAct_2(false);
          setAct_3(false);
          setAct_4(true);
        }}
      >
        <LinkContainer to='/member/agentpromote' onClick={() => setToggle('')}>
          <a id='L4' href='/'>
            <i className='iconFont demo-icon icon-main_m_icon04'>&#xe800;</i>
            {t('CenterLeftMenu.Agentpromote')}
            <div className='menu_arr'></div>
          </a>
        </LinkContainer>
        <ul className='LMsubMenu '>{toggleClasses.slice(7, 10)}</ul>
      </li>
    </ul>
  );
};

export default CenterLeftMenu;
