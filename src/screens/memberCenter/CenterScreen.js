import React from 'react';
import './MemberCenterpage.css';
import BalanceTable from '../../components/memberCenter/BalanceTable';

const CenterScreen = () => {
  return (
    <div className='memberContent'>
      <div className='account_detail'>
        <div className='a_d_title'>
          <h2>帐号详情</h2>
        </div>
        <div className='a_d_part1'>
          <ul className='tab_title'>
            <li className='balanceTab'>
              <h2>余额</h2>
            </li>
            <li className='betAmountTab off'>
              <h2>投注额</h2>
            </li>
          </ul>
          <ul className='tab_container'>
            <li className='act'>
              <div className='myWallet'>
                我的钱包
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
          </ul>
        </div>
        <div className='a_d_part2'>
          <ul className='p2_Container'>
            <li>
              <div className='a_d_title2'>
                <h2>常用功能</h2>
              </div>
              <div className='cf_content'>
                <button>
                  <i className='demo-icon-m icon-icon_onlinepayment'></i>
                  <p>在线支付</p>
                </button>
                <button>
                  <i className='demo-icon-m icon-icon_financerecord'></i>
                  <p>资金纪录</p>
                </button>
                <button>
                  <i className='demo-icon-m icon-icon_onlinepayment'></i>
                  <p>修改密码</p>
                </button>
              </div>
            </li>
            <li>
              <div className='a_d_title'>
                <h2>公告信息</h2>
              </div>
              <div className='announcement'>
                <ul>
                  <li>
                    <h4>Daily Bouns</h4>
                    <p>
                      Congratulation, you're won the 0.50 bonus. Keep going and
                      win more!
                    </p>
                  </li>
                  <li>
                    <h4>Daily Bouns</h4>
                    <p>
                      Congratulation, you're won the 0.50 bonus. Keep going and
                      win more!
                    </p>
                  </li>
                  <li>
                    <h4>Daily Bouns</h4>
                    <p>
                      Congratulation, you're won the 0.50 bonus. Keep going and
                      win more!
                    </p>
                  </li>
                  <li>
                    <h4>Daily Bouns</h4>
                    <p>
                      Congratulation, you're won the 0.50 bonus. Keep going and
                      win more!
                    </p>
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
