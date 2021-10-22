import React from 'react';
import './ActicyBlock.css';

/* 需了解解構 參數 用法 */
const ActicyBlock = ({ backgroundImage, title, content }) => {
  return (
    <>
      <div
        className='text-light block'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='content'>
          <h3>{title}</h3>
          <p>{content}</p>
          <a className='detail-btn' href='/'>
            查看詳情
          </a>
        </div>
      </div>
    </>
  );
};

export default ActicyBlock;

/* style={{
    backgroundImage: `url(
     ${title}
    )`,
  }} */
