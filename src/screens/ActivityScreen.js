import React from 'react';
import ActivityNews from '../components/ActivityNews';
//活動頁面邏輯

/* activityRules={} */

const ActivityScreen = () => {
  const rules_1 = {
    first: '凡是在平台注册第一笔充值100泰铢以上，可获得返利100%',
    two: '冲的多，送的多，可连续领取30天',
    three: '投注流水不包含排山倒海，水浒传，幸运六狮等游戏类型',
  };
  const rules_2 = {
    first: '在充值活动专区充值，最高可获赠充值额2%的彩金，笔笔充，笔笔送',
    two: '押注需达到充值额一倍流水，即可提现，若押注未达一倍流水，提现时则需扣除赠送的彩金',
    three:
      '举例：充值100泰铢金币，获赠1元金币，在押注100泰铢金币后，提现无限制，若押注未达到100元，提现时则需扣除1泰铢 金币',
  };
  const rules_3 = {
    first:
      '在活动时间内，每周一至周六亏损达到到1000泰铢以上的账号，在本周六可申请回血返利金',
    two: '周日可领取回血返利转运 金,逾期未领视为放弃',
    three:
      '同一IP,同一会员，同一姓名取款银行卡号不可重复领取，任何会员或团体以不正常方式进行游戲',
  };
  return (
    <div>
      <div class='p_banner' />

      <ActivityNews
        title={'首充赠送100%'}
        activityContent={'首次充值赠送100%'}
        activityRules={rules_1}
      />
      <ActivityNews
        title={'充值赠送，最高返利2%'}
        activityContent={'充值赠送活动'}
        activityRules={rules_2}
      />
      <ActivityNews
        title={'首充赠送100%'}
        activityContent={'首次充值赠送100%'}
        activityRules={rules_3}
      />
    </div>
  );
};

export default ActivityScreen;
