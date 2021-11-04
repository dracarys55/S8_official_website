import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

const MoneyRecordScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='searchingRecords '>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on'>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_1')}</h2>
            </li>
            <li>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_2')}</h2>
            </li>
            <li>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_3')}</h2>
            </li>
            <li>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_4')}</h2>
            </li>
            <li>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_5')}</h2>
            </li>
            <li>
              <h2>{t('MoneyRecordScreen.Sr_tab_title_6')}</h2>
            </li>
          </ul>
        </div>
        <div className='sr_exchangeRecord'>
          <label for='from'>{t('MoneyRecordScreen.From')}</label>
          <input
            id='datepicker_from'
            type='text'
            name='from'
            placeholder='dd/mm/yyyy'
          />
          <label for='to'>{t('MoneyRecordScreen.To')}</label>
          <input
            id='datepicker_to'
            type='text'
            name='to'
            placeholder='dd/mm/yyyy'
          />
          <a class='contentButton_1' href='/'>
            {t('MemberCenter_utils.Submit')}
          </a>
          <table className='sr_er_Table'>
            <tr>
              <th>{t('MoneyRecordScreen.sr_er_Table_1')}</th>
              <th>{t('MoneyRecordScreen.sr_er_Table_2')}</th>
              <th>{t('MoneyRecordScreen.sr_er_Table_3')}</th>
              <th>{t('MoneyRecordScreen.sr_er_Table_4')}</th>
              <th>{t('MoneyRecordScreen.sr_er_Table_5')}</th>
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
