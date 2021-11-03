import React from 'react';
import './ActivityBlock.css';
import { useTranslation } from 'react-i18next';

const ActivityBlock = ({ backgroundImage, title, content }) => {
  const { t } = useTranslation();
  return (
    <div className='activity-block'>
      <div
        className='text-light block'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='content'>
          <h3 className='activity-block'>{title}</h3>
          <p>{content}</p>
          <a className='detail-btn' href='/activities'>
            {t('Activity.Block_utils.Button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityBlock;
