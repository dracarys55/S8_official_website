import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

import setting from '../screensImages/member/setting.png';

const MyTextScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='personalCenter_myMsg_mail minH900 hide'>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on' id='myMsg_mail'>
              <h2>{t('MyTextScreen.Sr_tab_title_1')}</h2>
            </li>
            <li id='myMsg_suggest'>
              <h2>{t('MyTextScreen.Sr_tab_title_2')}</h2>
            </li>
          </ul>
        </div>
        <div className='tableStyle1'>
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
    </div>
  );
};

export default MyTextScreen;
