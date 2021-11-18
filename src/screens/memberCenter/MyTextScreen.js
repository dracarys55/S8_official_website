import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

import setting from '../screensImages/member/setting.png';

const MyTextScreen = () => {
  const { t } = useTranslation();
  const [change, setChange] = useState(true);
  return (
    <div className='memberContent'>
      <div className='sr_tab'>
        <ul className='sr_tab_title'>
          <li
            className={change ? 'on' : ''}
            id='myMsg_mail'
            onClick={() => {
              setChange(true);
            }}
          >
            <h2>{t('MyTextScreen.Sr_tab_title_1')}</h2>
          </li>
          <li
            className={change ? '' : 'on'}
            id='myMsg_suggest'
            onClick={() => {
              setChange(false);
            }}
          >
            <h2>{t('MyTextScreen.Sr_tab_title_2')}</h2>
          </li>
        </ul>
      </div>
      <div
        className={`personalCenter_myMsg_mail minH900 ${change ? '' : 'hide'}`}
      >
        <div className='tableStyle1 '>
          <table>
            <thead>
              <tr>
                <th>{t('MyTextScreen.TableStyle1_1')}</th>
                <th>{t('MyTextScreen.TableStyle1_2')}</th>
                <th>{t('MyTextScreen.TableStyle1_3')}</th>
                <th>{t('MyTextScreen.TableStyle1_4')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='setting' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='setting' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr>
                <td>{t('MyTextScreen.Unread')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>{t('MyTextScreen.Readed')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>{t('MyTextScreen.Readed')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>{t('MyTextScreen.Readed')}</td>
                <td>Daily Bonus!</td>
                <td>2020-08-19 00:25:08</td>
                <td>
                  <img src={setting} alt='' />
                </td>
              </tr>
              <tr className='readed'>
                <td>{t('MyTextScreen.Readed')}</td>
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
      <div class={`suggest ${change ? 'hide' : ''}`}>
        <p>內容 :</p>
        <textarea
          id='suggestion'
          placeholder='内容不少于5个字，不大于1000个字'
          name=''
          rows='4'
          cols='50'
        ></textarea>
        <a className='contentButton_1' href='/'>
          提交
        </a>
      </div>
    </div>
  );
};

export default MyTextScreen;
