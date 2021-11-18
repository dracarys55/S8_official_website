import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

const AgentPromoteScreen = () => {
  const { t } = useTranslation();
  const [change, setChange] = useState(true);
  return (
    <div className='memberContent'>
      <div className='sr_tab'>
        <ul className='sr_tab_title'>
          <li
            className={change ? 'on' : ''}
            id='myPromote'
            onClick={() => setChange(true)}
          >
            <h2>{t('AgentPromoteScreen.Sr_tab_title_1')}</h2>
          </li>
          <li
            className={change ? '' : 'on'}
            id='myPromote'
            onClick={() => setChange(false)}
          >
            <h2>{t('AgentPromoteScreen.Sr_tab_title_2')}</h2>
          </li>
        </ul>
      </div>
      <div className={`agent_myPromote minH900 ${change ? '' : 'hide'}`}>
        <div className='commissions'>
          <div className='my_commission'>
            <h3>{t('AgentPromoteScreen.My_commission')}</h3>
            <h1>99,999</h1>
          </div>
          <div className='today_commission'>
            <h3>{t('AgentPromoteScreen.Today_commission')}</h3>
            <h1>99,999</h1>
          </div>
        </div>
        <div className='commissions_list'>
          <div className='c_list_col'>
            <h3>{t('AgentPromoteScreen.Commissions_list_1')}</h3>
            <p>1.46</p>
          </div>
          <div className='c_list_col'>
            <h3>{t('AgentPromoteScreen.Commissions_list_2')}</h3>
            <p>0</p>
            <a className='getRecorBtn flri' href='/'>
              {t('AgentPromoteScreen.GetRecorBtn')}
            </a>
          </div>
          <div className='c_list_col'>
            <h3>{t('AgentPromoteScreen.Commissions_list_3')}</h3>
            <p>472727</p>
          </div>
          <div className='c_list_col'>
            <h3>
              {t('AgentPromoteScreen.Commissions_list_4')}
              <span>{t('AgentPromoteScreen.Commissions_list_span')}</span>:
            </h3>
            <p>5</p>
          </div>
          <div className='c_list_col'>
            <h3>{t('AgentPromoteScreen.Commissions_list_5')}</h3>
            <p>888</p>
          </div>
          <div className='c_list_col'>
            <h3>
              {t('AgentPromoteScreen.Commissions_list_6')}
              <span>{t('AgentPromoteScreen.Commissions_list_span')}</span>:
            </h3>
            <p>88</p>
          </div>
          <div className='c_list_col'>
            <h3>{t('AgentPromoteScreen.Commissions_list_7')}</h3>
            <p>472727</p>
          </div>
        </div>
        <div className='get_commission'>
          <a className='contentButton_1' href='/'>
            {t('AgentPromoteScreen.ContentButton_1')}
          </a>
        </div>
        <div className='get_link'>
          <div className='c_qrcode'>
            <img src='img/member/c_qrcode.png' alt='' />
          </div>
          <div className='c_link'>
            <p>https//s8.com/#/register?invitecode=472727</p>
          </div>
          <a className='contentButton_1 short' href='/'>
            {t('AgentPromoteScreen.Copy')}
          </a>
        </div>
      </div>
      <div className={`agent_childSearch minH900 ${change ? 'hide' : ''}`}>
        <div className='childSearch'>
          <div className='cs_count'>
            <div className='countRow'>
              <p>直属人数:</p>
              <p className='value'>99,988</p>
            </div>
            <div className='countRow'>
              <p>今日总流水:</p>
              <p className='value'>88,899</p>
            </div>
          </div>
          <div className='cs_search'>
            <p>直属人数:</p>
            <input type='text' placeholder='输入直属玩家帐号 ' />
            <a className='contentButton_1 short' href='/'>
              搜索
            </a>
            <a className='contentButton_2 short' href='/'>
              重置
            </a>
          </div>
          <div className='tableStyle1'>
            <table>
              <thead>
                <tr>
                  <th>帐号</th>
                  <th>今日流水</th>
                  <th>总流水</th>
                  <th>团队人数</th>
                  <th>直属人数</th>
                </tr>
              </thead>
              <tbody>
                {/* 這裡可以再精簡 */}
                <tr>
                  <td>Kobe Bryant</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Stephen Curry</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Kobe Bryant</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Stephen Curry</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Kobe Bryant</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Stephen Curry</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Kobe Bryant</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Stephen Curry</td>
                  <td>163,516</td>
                  <td>654,654,164</td>
                  <td>541</td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPromoteScreen;
