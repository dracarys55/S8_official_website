import React from 'react';
import Carousel from '../components/Slider';
import ActivityBlock from '../components/ActivityBlock';
import RedEnvelope from '../components/RedEnvelope';
import { useTranslation } from 'react-i18next';
import './HomeScreen.css';

import acticyBlockImage1 from '../components/componentsImages/area_1_block1.png';
import acticyBlockImage2 from '../components/componentsImages/area_1_block2.png';
import acticyBlockImage3 from '../components/componentsImages/area_1_block3.png';
import area_2_pic from '../screens/screensImages/area_2_pic.png';
import area_2_qrcode from '../screens/screensImages/area_2_qrcode.png';
import area_2_html5 from '../screens/screensImages/area_2_html5.png';

//官方網站首頁
const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <Carousel />
      <RedEnvelope />
      <section className='ActivityBlock'>
        <ActivityBlock
          backgroundImage={acticyBlockImage1}
          title={t('Activity.Block_1.Title')}
          content={t('Activity.Block_1.Content')}
        />
        <ActivityBlock
          backgroundImage={acticyBlockImage2}
          title={t('Activity.Block_2.Title')}
          content={t('Activity.Block_2.Content')}
        />
        <ActivityBlock
          backgroundImage={acticyBlockImage3}
          title={t('Activity.Block_3.Title')}
          content={t('Activity.Block_3.Content')}
        />
      </section>
      <div className='area-2'>
        <img src={area_2_pic} alt='' className='img-area-2' />
        <div className='textSection'>
          <h3 className='text-light area-2'>
            {t('Activity.TextSection.Title')}
          </h3>
          <p className='text-light area-2'>
            {t('Activity.TextSection.Content_1')}
            <br />
            {t('Activity.TextSection.Content_2')}
          </p>
          <div className='pics'>
            <div className='pic'>
              <img src={area_2_qrcode} alt='' className='qrCode' />
              <p className='text-light area-2'>
                {t('Activity.Pic_1.Content_1')} <br />
                {t('Activity.Pic_1.Content_2')}
              </p>
            </div>
            <div className='pic'>
              <img src={area_2_html5} alt='' className='h5' />
              <p className='text-light area-2'>
                {t('Activity.Pic_2.Content_1')} <br />
                {t('Activity.Pic_2.Content_2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
