import React from 'react';
import './ActivityBlock.css';

/* 需了解解構 參數 用法 */
const ActivityBlock = ({ backgroundImage, title, content }) => {
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
            查看詳情
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityBlock;
