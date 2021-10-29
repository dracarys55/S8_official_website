import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MemberCenterUserInfo from '../../components/memberCenter/MemberCenterUserInfo';
import CenterLeftMenu from '../../components/memberCenter/CenterLeftMenu';
import Centerpage from './Centerpage';
import MoneyManageScreen from './MoneyManageScreen';
import MoneyWithdrawlScreen from './MoneyWithdrawlScreen';
import MoneyRecordScreen from './MoneyRecordScreen';
import MyVipInfoScreen from './MyVipInfoScreen';
import MyInfoScreen from './MyInfoScreen';
import MyTextScreen from './MyTextScreen';
import MyChangePasswordScreen from './MyChangePasswordScreen';
import AgentPromoteScreen from './AgentPromoteScreen';
import AgentFeedbackScreen from './AgentFeedbackScreen';
import AgentTeachScreen from './AgentTeachScreen';

import './MemberCenterScreen.css';

/* act class 控制點擊 css 樣式  */
const MemberCenterScreen = () => {
  return (
    <>
      <MemberCenterUserInfo />
      <div className='memberMain'>
        <div className='container'>
          <CenterLeftMenu />
          <Switch>
            <Route path='/member/centerpage' component={Centerpage} />
            <Route path='/member/moneymanage' component={MoneyManageScreen} />
            <Route
              path='/member/moneywithdrawal'
              component={MoneyWithdrawlScreen}
            />
            <Route path='/member/moneyrecord' component={MoneyRecordScreen} />
            <Route path='/member/myvipinfo' component={MyVipInfoScreen} />
            <Route path='/member/myinfo' component={MyInfoScreen} />
            <Route path='/member/mytext' component={MyTextScreen} />
            <Route
              path='/member/mychangepassword'
              component={MyChangePasswordScreen}
            />

            <Route path='/member/agentpromote' component={AgentPromoteScreen} />
            <Route
              path='/member/agentfeedback'
              component={AgentFeedbackScreen}
            />
            <Route path='/member/agentteach' component={AgentTeachScreen} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default MemberCenterScreen;
