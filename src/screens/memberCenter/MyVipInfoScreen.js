import React from 'react';
import './MemberCenterpage.css';
import { useTranslation } from 'react-i18next';

import VIP1 from '../screensImages/member/VIP1.png';
import VIP2 from '../screensImages/member/VIP2.png';
import tc_icon_1 from '../screensImages/member/tc_icon_1.png';
import tc_icon_2 from '../screensImages/member/tc_icon_2.png';
import tc_icon_3 from '../screensImages/member/tc_icon_3.png';
import tc_icon_4 from '../screensImages/member/tc_icon_4.png';
import tc_icon_5 from '../screensImages/member/tc_icon_5.png';
import tc_icon_6 from '../screensImages/member/tc_icon_6.png';
import rk_vip01 from '../screensImages/member/rk_vip01.png';
import rk_vip02 from '../screensImages/member/rk_vip02.png';
import rk_vip03 from '../screensImages/member/rk_vip03.png';
import rk_vip04 from '../screensImages/member/rk_vip04.png';
import rk_vip05 from '../screensImages/member/rk_vip05.png';
import rk_vip06 from '../screensImages/member/rk_vip06.png';
import rk_vip07 from '../screensImages/member/rk_vip07.png';
import rk_vip08 from '../screensImages/member/rk_vip08.png';
import rk_vip09 from '../screensImages/member/rk_vip09.png';
import rk_vip10 from '../screensImages/member/rk_vip10.png';

const MyVipInfoScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='personalCenter_vip'>
        <div className='a_d_title'>
          <h2>{t('MyVipInfoScreen.Title')}</h2>
        </div>
        <div className='vip_row'>
          <div className='col_no1'>
            <img src={VIP1} alt='VIP1' />
          </div>
          <div className='col_no2'>
            <div className='nowSaving'>
              <div className='nowSavingNum'>
                {t('MyVipInfoScreen.NowSavingNum')}
                <span>1000</span>(100/1000)
              </div>
              <div className='nowBetNum'>
                {t('MyVipInfoScreen.NowBetNum')}
                <span>744.5</span>(100/1000)
              </div>
            </div>
            <div className='myVIP_progress'>
              <div className='savingProgress'>
                <div className='progress_content' style={{ width: '50%' }}>
                  <div className='percentageNum'>50%</div>
                </div>
                <div className='progress_num'>100000/200000</div>
              </div>
              <div className='betProgress'>
                <div className='progress_content' style={{ width: '60%' }}>
                  <div className='percentageNum'>60%</div>
                </div>
                <div className='progress_num'>100000/200000</div>
              </div>
            </div>
            <div className='myVIP_note'>{t('MyVipInfoScreen.MyVIP_note')}</div>
          </div>
          <div className='col_no3'>
            <img src={VIP2} alt='VIP2' />
          </div>
        </div>
        <div className='a_d_title'>
          <h2>{t('MyVipInfoScreen.A_d_title_1')}</h2>
        </div>
        <div className='vip_row'>
          <ul className='myPrivilege'>
            <li>
              <img src={tc_icon_1} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_1')}</p>
              <p>8฿</p>
            </li>
            <li>
              <img src={tc_icon_2} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_2')}</p>
              <p>8฿</p>
            </li>
            <li>
              <img src={tc_icon_3} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_3')}</p>
              <p>8฿</p>
            </li>
            <li>
              <img src={tc_icon_4} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_4')}</p>
              <p>8฿</p>
            </li>
            <li>
              <img src={tc_icon_5} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_5')}</p>
              <p>8฿</p>
            </li>
            <li>
              <img src={tc_icon_6} alt='' />
              <p>{t('MyVipInfoScreen.MyPrivilege_6')}</p>
              <p>8฿</p>
            </li>
          </ul>
        </div>
        <div className='a_d_title nobb'>
          <h2>{t('MyVipInfoScreen.A_d_title_2')}</h2>
        </div>
        <ul className='improveRule'>
          <li>
            <img src={rk_vip01} alt='rk_vip01' />
          </li>
          <li>
            <img src={rk_vip02} alt='rk_vip02' />
          </li>
          <li>
            <img src={rk_vip03} alt='rk_vip03' />
          </li>
          <li>
            <img src={rk_vip04} alt='rk_vip04' />
          </li>
          <li>
            <img src={rk_vip05} alt='rk_vip05' />
          </li>
          <li>
            <img src={rk_vip06} alt='rk_vip06' />
          </li>
          <li className='on'>
            <img src={rk_vip07} alt='rk_vip07' />
          </li>
          <li>
            <img src={rk_vip08} alt='rk_vip08' />
          </li>
          <li>
            <img src={rk_vip09} alt='rk_vip09' />
          </li>
          <li>
            <img src={rk_vip10} alt='rk_vip10' />
          </li>
        </ul>
        <div className='vip_row vipDesc'>
          <div className='leftCol'>
            <h4>{t('MyVipInfoScreen.Vip_leftCol')}</h4>
            <div className='vipCard'>
              <div className='vipLV'>
                <img src={rk_vip07} alt='' />
                <h1 className='VIPtitle'>VIP7</h1>
              </div>
              <div className='colx3'>
                <p>
                  3000000
                  <br />
                  {t('MyVipInfoScreen.Vip_leftCol_deposit')}
                </p>
                <p>
                  30000000
                  <br />
                  {t('MyVipInfoScreen.Vip_leftCol_deposit')}
                </p>
                <p>
                  2888
                  <br />
                  {t('MyVipInfoScreen.Vip_leftCol_deposit')}
                </p>
              </div>
            </div>
          </div>
          <div className='rightCol'>
            <h4>{t('MyVipInfoScreen.Vip_rightCol')}</h4>
            <ul className='LVcondition'>
              <li>
                {t('MyVipInfoScreen.Vip_rightCol_LVcondition_1')}
                <span className='value'>2888฿</span>
              </li>
              <li>
                {t('MyVipInfoScreen.Vip_rightCol_LVcondition_2')}
                <span className='value'>300000฿</span>
              </li>
              <li>
                {t('MyVipInfoScreen.Vip_rightCol_LVcondition_3')}
                <span className='value'>3000000฿</span>
              </li>
              <li>
                {t('MyVipInfoScreen.Vip_rightCol_LVcondition_4')}
                <span className='value'>
                  {t('MyVipInfoScreen.Vip_rightCol_LVcontent_4')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVipInfoScreen;
