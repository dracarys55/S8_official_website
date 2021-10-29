import React from 'react';
import './MemberCenterpage.css';

const MoneyRecordScreen = () => {
  return (
    <div className='memberContent'>
      <div className='searchingRecords '>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on'>
              <h2>存款查询</h2>
            </li>
            <li>
              <h2>取款查询</h2>
            </li>
            <li>
              <h2>彩金查询</h2>
            </li>
            <li>
              <h2>其他查询</h2>
            </li>
            <li>
              <h2>额度转换纪录查询</h2>
            </li>
            <li>
              <h2>下注查询</h2>
            </li>
          </ul>
        </div>
        <div className='sr_exchangeRecord'>
          <label for='from'>从</label>
          <input
            id='datepicker_from'
            type='text'
            name='from'
            placeholder='dd/mm/yyyy'
          />
          <label for='to'>到</label>
          <input
            id='datepicker_to'
            type='text'
            name='to'
            placeholder='dd/mm/yyyy'
          />
          <a class='contentButton_1' href='/'>
            提交
          </a>
          <table className='sr_er_Table'>
            <tr>
              <th>时间</th>
              <th>金额</th>
              <th>存款方式</th>
              <th>状态</th>
              <th>备注</th>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MoneyRecordScreen;
