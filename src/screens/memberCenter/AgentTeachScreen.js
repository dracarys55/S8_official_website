import React from 'react';
import './MemberCenterpage.css';

import teach from '../screensImages/member/teach.png';

const AgentTeachScreen = () => {
  return (
    <div className='memberContent'>
      <img src={teach} alt='teach' style={{ width: '100%' }} />
    </div>
  );
};

export default AgentTeachScreen;
