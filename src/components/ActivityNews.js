import React from 'react';
import './ActivityNews.css';

import activity_img from './componentsImages/activity_img.png';
import arrow_up from './componentsImages/arrow_up.svg';

/* props : title, rules */
const ActivityNews = ({ title, activityContent, activityRules }) => {
  return (
    <>
      <div className='promote_list'>
        <div className='container'>
          <div className='promote_list_item'>
            <div className='p_list_left'>
              <div className='left_pic'>
                <img src={activity_img} alt='' />
              </div>
              <div className='left_message'>
                <h3 className='p_name'>首充赠送100%</h3>
                <p className='d_date'>2020-12-31 23:59:59</p>
              </div>
            </div>
            <div className='p_list_right '>
              <div className='list_content closeH'>
                <div className='list_title'>
                  <h1 className='activity-news'>{title}</h1>
                </div>
                <p className='a_outline'>
                  活动时间：长期
                  <br />
                  活动对象：所有玩家
                  <br />
                  活动内容：{activityContent}
                </p>
                <table className='list_table'>
                  <thead>
                    <tr>
                      <th>首充金额</th>
                      <th>每天赠送金币</th>
                      <th>累计领取金币</th>
                      <th>提款要求</th>
                    </tr>
                  </thead>
                </table>

                <h2 className='list_header'>活动规则</h2>

                <ol className='a_requirement'>
                  <li>{activityRules.first}</li>
                  <li>{activityRules.two}</li>
                  <li>{activityRules.three}</li>
                </ol>
              </div>
              <div className='bottom_btn'>
                <img className='arrow' src={arrow_up} alt='' />
                <p>查看詳情</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityNews;
