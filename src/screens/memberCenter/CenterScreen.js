import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';
import BalanceTable from '../../components/memberCenter/BalanceTable';

const CenterScreen = () => {
  const { t } = useTranslation();
  const [change, setChange] = useState(false);
  const switchTab = () => {
    setChange(!change);
  };
  return (
    <div className='memberContent'>
      <div className='account_detail'>
        <div className='a_d_title'>
          <h2>{t('CenterScreen.Title')}</h2>
        </div>
        <div className='a_d_part1'>
          <ul className='tab_title'>
            <li
              className={`balanceTab ${change ? 'off' : ''}`}
              onClick={() => switchTab()}
            >
              <h2>{t('CenterScreen.BalanceTab')}</h2>
            </li>
            <li
              className={`balanceTab ${change ? '' : 'off'}`}
              onClick={() => switchTab()}
            >
              <h2>{t('CenterScreen.BetAmountTab')}</h2>
            </li>
          </ul>
          <ul className='tab_container '>
            <li className={change ? '' : 'act'}>
              <div className='myWallet'>
                {t('CenterScreen.MyWallet')}
                <span>5.98</span>
              </div>
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
              <BalanceTable
                title_1={'PP GAMES'}
                title_2={'NET GAMES'}
                title_3={'TC SEA Lotto'}
                title_4={'XJ SPORTS'}
              />
            </li>
            <li id='betAmount' className={change ? 'act' : ''}>
              <div class='commission '>
                今日返佣<span>0元</span>
                <p>预估反佣与实际反佣有部分差额，最终以实际反佣为准</p>
              </div>
              <div class='commissionContent'>
                <table class='balanceTable'>
                  <tbody>
                    <tr>
                      <td>PP GAMES</td>
                      <td class='amount'>0.00฿</td>
                      <td>NET GAMES</td>
                      <td class='amount'>0.00฿</td>
                      <td>TC SEA Lotto</td>
                      <td class='amount'>0.00฿</td>
                      <td>XJ SPORTS</td>
                      <td class='amount2'>0.00฿</td>
                    </tr>
                  </tbody>
                </table>
                <p>暂无数据</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='a_d_part2'>
          <ul className='p2_Container'>
            <li>
              <div className='a_d_title2'>
                <h2>{t('CenterScreen.A_d_title2')}</h2>
              </div>
              <div className='cf_content'>
                <button>
                  <i className='demo-icon-m icon-icon_onlinepayment'></i>
                  <p>{t('CenterScreen.OnlinePayment')}</p>
                </button>
                <button>
                  <i className='demo-icon-m icon-icon_financerecord'></i>
                  <p>{t('CenterScreen.FinanceRecord')}</p>
                </button>
                <button>
                  <i className='demo-icon-m icon-icon_onlinepayment'></i>
                  <p>{t('CenterScreen.ChangePassword')}</p>
                </button>
              </div>
            </li>
            <li>
              <div className='a_d_title'>
                <h2>{t('CenterScreen.A_d_title')}</h2>
              </div>
              <div className='announcement'>
                <ul>
                  <li>
                    <h4>{t('CenterScreen.Announcement.Title')}</h4>
                    <p>{t('CenterScreen.Announcement.Content')}</p>
                  </li>
                  <li>
                    <h4>{t('CenterScreen.Announcement.Title')}</h4>
                    <p>{t('CenterScreen.Announcement.Content')}</p>
                  </li>
                  <li>
                    <h4>{t('CenterScreen.Announcement.Title')}</h4>
                    <p>{t('CenterScreen.Announcement.Content')}</p>
                  </li>
                  <li>
                    <h4>{t('CenterScreen.Announcement.Title')}</h4>
                    <p>{t('CenterScreen.Announcement.Content')}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CenterScreen;
