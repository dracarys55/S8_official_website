import React from 'react';
import './RedEnvelope.css';

import redPack_1 from '../components/componentsImages/redPack_1.png';
import redPack_2 from '../components/componentsImages/redPack_2.png';

const RedEnvelope = () => {
  return (
    <div className='red-pack'>
      <a href='/' className='bonus-red-pack-btn'>
        <img src={redPack_1} alt='' />
      </a>
      <a href='/' className='bonus-red-pack-btn'>
        <img src={redPack_2} alt='' />
      </a>
    </div>
  );
};

export default RedEnvelope;
