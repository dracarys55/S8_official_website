import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

const MoneyRecordScreen = () => {
  const [change, setChange] = useState(0);
  const { t } = useTranslation();

  const arr = [
    t('MoneyRecordScreen.Sr_tab_title_1'),
    t('MoneyRecordScreen.Sr_tab_title_2'),
    t('MoneyRecordScreen.Sr_tab_title_3'),
    t('MoneyRecordScreen.Sr_tab_title_4'),
    t('MoneyRecordScreen.Sr_tab_title_5'),
    t('MoneyRecordScreen.Sr_tab_title_6'),
  ];

  const handleOnClick = (index) => {
    setChange(index);
  };
  const toggleClasses = arr.map((element, index) => {
    return (
      <li
        key={index}
        className={change === index ? 'on' : ''}
        onClick={() => handleOnClick(index)}
      >
        <h2>{element}</h2>
      </li>
    );
  });

  return (
    <div className='memberContent'>
      <div className='searchingRecords '>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>{toggleClasses}</ul>
        </div>
        <div className={`sr_exchangeRecord ${change === 0 ? '' : 'hide'}`}>
          <label htmlFor='from'>{t('MoneyRecordScreen.From')}</label>
          <input
            id='datepicker_from'
            type='text'
            name='from'
            placeholder='dd/mm/yyyy'
          />
          <label htmlFor='to'>{t('MoneyRecordScreen.To')}</label>
          <input
            id='datepicker_to'
            type='text'
            name='to'
            placeholder='dd/mm/yyyy'
          />
          <a className='contentButton_1' href='/'>
            {t('MemberCenter_utils.Submit')}
          </a>
          <table className='sr_er_Table'>
            <thead>
              <tr>
                <th>{t('MoneyRecordScreen.sr_er_Table_1')}</th>
                <th>{t('MoneyRecordScreen.sr_er_Table_2')}</th>
                <th>{t('MoneyRecordScreen.sr_er_Table_3')}</th>
                <th>{t('MoneyRecordScreen.sr_er_Table_4')}</th>
                <th>{t('MoneyRecordScreen.sr_er_Table_5')}</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MoneyRecordScreen;
