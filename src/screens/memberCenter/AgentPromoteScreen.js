import React from 'react';
import './MemberCenterpage.css';

const AgentPromoteScreen = () => {
  return (
    <div className='memberContent'>
      <div class='agent_myPromote minH900 hide'>
        <div class='sr_tab'>
          <ul class='sr_tab_title'>
            <li class='on' id='myPromote'>
              <h2>我的推广</h2>
            </li>
            <li id='CS'>
              <h2>直属查询</h2>
            </li>
          </ul>
        </div>
        <div class='commissions'>
          <div class='my_commission'>
            <h3>我的佣金(฿)</h3>
            <h1>99,999</h1>
          </div>
          <div class='today_commission'>
            <h3>今日佣金预估(฿)</h3>
            <h1>99,999</h1>
          </div>
        </div>
        <div class='commissions_list'>
          <div class='c_list_col'>
            <h3>历史总佣金:</h3>
            <p>1.46</p>
          </div>
          <div class='c_list_col'>
            <h3>可提取佣金:</h3>
            <p>0</p>
            <a class='getRecorBtn flri' href='/'>
              领取记录
            </a>
          </div>
          <div class='c_list_col'>
            <h3>我的ID:</h3>
            <p>472727</p>
          </div>
          <div class='c_list_col'>
            <h3>
              团队人数<span>(新增)</span>:
            </h3>
            <p>5</p>
          </div>
          <div class='c_list_col'>
            <h3>今日团队业绩:</h3>
            <p>888</p>
          </div>
          <div class='c_list_col'>
            <h3>
              直属人数<span>(新增)</span>:
            </h3>
            <p>88</p>
          </div>
          <div class='c_list_col'>
            <h3>今日自营业绩:</h3>
            <p>472727</p>
          </div>
        </div>
        <div class='get_commission'>
          <a class='contentButton_1' href='/'>
            领取佣金
          </a>
        </div>
        <div class='get_link'>
          <div class='c_qrcode'>
            <img src='img/member/c_qrcode.png' alt='' />
          </div>
          <div class='c_link'>
            <p>https//s8.com/#/register?invitecode=472727</p>
          </div>
          <a class='contentButton_1 short' href='/'>
            复制
          </a>
        </div>
        {/*   <div class='commissions_pop popUp' id='c_record'>
          <div class='c_popBox'>
            <div class='popHead'>
              领取纪录
              <a href=''>
                <img class='close' src='img/close-w.svg' alt='' />
              </a>
            </div>
            <div class='popContent'>
              <div class='days_tab'>
                <ul>
                  <li class='on'>今天</li>
                  <li>近3天</li>
                  <li>近7天</li>
                  <li>近30天</li>
                </ul>
              </div>
              <div class='c_table noRecord'>
                <table>
                  <thead>
                    <tr>
                      <th>时间</th>
                      <th>金额</th>
                      <th>类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2020/10/10</td>
                      <td>654,695</td>
                      <td>直属佣金</td>
                    </tr>
                    <tr>
                      <td>2020/10/10</td>
                      <td>654,695</td>
                      <td>直属佣金</td>
                    </tr>
                    <tr>
                      <td>2020/10/10</td>
                      <td>654,695</td>
                      <td>直属佣金</td>
                    </tr>
                    <tr>
                      <td>2020/10/10</td>
                      <td>654,695</td>
                      <td>直属佣金</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div class='commissions_pop popUp' id='c_getMoney'>
          <div class='c_popBox'>
            <div class='popHead'>
              领取佣金
              <a href=''>
                <img class='close' src='img/close-w.svg' alt='' />
              </a>
            </div>
            <div class='popContent'>
              <div>
                <h3>可领取佣金:</h3>
                <h2>1.46</h2>
              </div>
              <div>
                <h3>钱包馀额:</h3>
                <h3>491.99</h3>
              </div>
              <p class='note'>
                注:领取的佣金将会转到我的钱包馀额里
                <a class='contentButton_1 txce' href='#'>
                  领取
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AgentPromoteScreen;
