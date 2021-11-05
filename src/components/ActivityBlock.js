import React from 'react';
import './ActivityBlock.css';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';

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
          <LinkContainer to='/activities'>
            <a className='detail-btn' href='/'>
              {t('Activity.Block_utils.Button')}
            </a>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityBlock;
