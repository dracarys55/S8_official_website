import React from 'react';
import './MemberCenterpage.css';

import setting from '../screensImages/member/setting.png';

const MyTextScreen = () => {
  return (
    <div className='memberContent'>
      <div className='personalCenter_myMsg_mail minH900 hide'>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on' id='myMsg_mail'>
              <h2>收件箱</h2>
            </li>
            <li id='myMsg_suggest'>
              <h2>投诉建议</h2>
            </li>
          </ul>
        </div>
        <div className='tableStyle1'>
          <table>
            <thead>
              <tr>
                <th>状态</th>
                <th>主题</th>
                <th>时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='setting' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='setting' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>未读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>已读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>已读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>已读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>已读</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='pagination'>
          <div className='prev'>
            <span></span>
          </div>
          <span className='pageNum'>1</span>
          <div className='next'>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTextScreen;
