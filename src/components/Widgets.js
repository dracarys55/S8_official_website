import React from 'react';
import { useTranslation } from 'react-i18next';
import './Widgets.css';

import fr_icon_phone from './componentsImages/fr_icon_phone.png';
import fr_icon_service from './componentsImages/fr_icon_service.png';
import fr_icon_suggest from './componentsImages/fr_icon_suggest.png';
import fr_icon_mobile from './componentsImages/fr_icon_mobile.png';
import fr_icon_qrcode from './componentsImages/fr_icon_qrcode.png';

const Widgets = () => {
  const { t } = useTranslation();
  return (
    <div className='fixRight'>
      <ul className='toolList'>
        <li>
          <img src={fr_icon_phone} alt='' />
          <div className='toolContent'>
            <div className='tcHead'>{t('Widgets.TcHead')} </div>
            <p>11111111</p>
            <p>2222222</p>
          </div>
        </li>
        <li>
          <img src={fr_icon_service} alt='' />
          <div className='toolContent'>
            <a href='/'>{t('Widgets.Customer')}</a>
          </div>
        </li>
        <li>
          <img src={fr_icon_suggest} alt='' />
          <div className='toolContent'>
            <a href='/'>{t('Widgets.Advising')}</a>
          </div>
        </li>
        <li>
          <img src={fr_icon_mobile} alt='' />
          <div className='toolContent'>
            <p>{t('Widgets.Download')}</p>
            <img alt='Scan me!' src={fr_icon_qrcode}></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Widgets;
