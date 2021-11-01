import React from 'react';
import ActivityNews from '../components/ActivityNews';
//活動頁面邏輯

/* activityRules={} */

const ActivityScreen = () => {
  const rules_1 = {
    first: '凡是在平台注册第一笔充值100泰铢以上，可获得返利100%',
    two: '冲的多，送的多，可连续领取30天',
    three: '投注流水不包含排山倒海，水浒传，幸运六狮等游戏类型',
    four: '每位玩家相同支付方式（相同借记卡，信用卡，银行账号）及IP地址只能享有一次优惠，若会员有重复申请账号的行为，公司保留取消或收回会员优惠彩金的权利',
    five: '本司的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实的方式套取红利或任何威胁，滥用公司优惠等行为，公司保留，冻结，取消该团体或个人账号结余的权利，本司保留最终解释权',
    six: '活动彩金一倍流水即可下分',
  };
  const rules_2 = {
    first: '在充值活动专区充值，最高可获赠充值额2%的彩金，笔笔充，笔笔送',
    two: '押注需达到充值额一倍流水，即可提现，若押注未达一倍流水，提现时则需扣除赠送的彩金',
    three:
      '举例：充值100泰铢金币，获赠1元金币，在押注100泰铢金币后，提现无限制，若押注未达到100元，提现时则需扣除1泰铢 金币',
    four: '投注流水不包含排山倒海，水浒传，幸运六狮等游戏类型的押注.',
  };
  const rules_3 = {
    first:
      '在活动时间内，每周一至周六亏损达到到1000泰铢以上的账号，在本周六可申请回血返利金',
    two: '周日可领取回血返利转运 金,逾期未领视为放弃',
    three:
      '同一IP,同一会员，同一姓名取款银行卡号不可重复领取，任何会员或团体以不正常方式进行游戲',
    four: '为避免文字理解差异，本活动最终解释权归官方所有',
  };
  return (
    <div>
      <div className='p_banner' />

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
        title={'回血返利，雪中送炭助您东山再起'}
        activityContent={'回血返利活动'}
        activityRules={rules_3}
      />
    </div>
  );
};

export default ActivityScreen;
