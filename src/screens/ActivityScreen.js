import React from 'react';
import { useTranslation } from 'react-i18next';
import ActivityNews from '../components/ActivityNews';
//活動頁面邏輯

/* activityRules={} */

const ActivityScreen = () => {
  const { t } = useTranslation();
  /* const rules_1 = {
    first: '凡是在平台注册第一笔充值100泰铢以上，可获得返利100%',
    two: '冲的多，送的多，可连续领取30天',
    three: '投注流水不包含排山倒海，水浒传，幸运六狮等游戏类型',
    four: '每位玩家相同支付方式（相同借记卡，信用卡，银行账号）及IP地址只能享有一次优惠，若会员有重复申请账号的行为，公司保留取消或收回会员优惠彩金的权利',
    five: '本司的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实的方式套取红利或任何威胁，滥用公司优惠等行为，公司保留，冻结，取消该团体或个人账号结余的权利，本司保留最终解释权',
    six: '活动彩金一倍流水即可下分',
  }; */
  const rules_1 = t('ActivityNews.ActivityNews_1.ActivityRules', {
    returnObjects: true,
  });
  const rules_2 = t('ActivityNews.ActivityNews_2.ActivityRules', {
    returnObjects: true,
  });
  const rules_3 = t('ActivityNews.ActivityNews_3.ActivityRules', {
    returnObjects: true,
  });
  return (
    <div>
      <div className='p_banner' />

      <ActivityNews
        title={t('ActivityNews.ActivityNews_1.Title')}
        activityContent={t('ActivityNews.ActivityNews_1.ActivityContent')}
        activityRules={rules_1}
      />
      <ActivityNews
        title={t('ActivityNews.ActivityNews_2.Title')}
        activityContent={t('ActivityNews.ActivityNews_2.ActivityContent')}
        activityRules={rules_2}
      />
      <ActivityNews
        title={t('ActivityNews.ActivityNews_3.Title')}
        activityContent={t('ActivityNews.ActivityNews_3.ActivityContent')}
        activityRules={rules_3}
      />
    </div>
  );
};

export default ActivityScreen;
