import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ActivityNews.css';

import activity_img from './componentsImages/activity_img.png';
import arrow_up from './componentsImages/arrow_up.svg';

/* props : title, rules */
const ActivityNews = ({ title, activityContent, activityRules }) => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false);

  const P_name = t('ActivityNews.ActivityNews_utils.P_name');
  const HideButton = t('ActivityNews.ActivityNews_utils.HideButton');
  const ShowButton = t('ActivityNews.ActivityNews_utils.ShowButton');
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
                <h3 className='p_name'>{P_name}</h3>
                <p className='d_date'>2020-12-31 23:59:59</p>
              </div>
            </div>
            <div className='p_list_right '>
              <div className={`list_content ${showContent ? '' : 'closeH'}`}>
                <div className='list_title'>
                  <h1 className='activity-news'>{title}</h1>
                </div>
                <p className='a_outline'>
                  {t('ActivityNews.ActivityNews_utils.ActivityTime')}
                  <br />
                  {t('ActivityNews.ActivityNews_utils.ActivityObject')}
                  <br />
                  {t('ActivityNews.ActivityNews_utils.ActivityContent')}
                  {activityContent}
                </p>
                <table className='list_table'>
                  <thead>
                    <tr>
                      <th>{t('ActivityNews.ActivityNews_utils.Th_1')}</th>
                      <th>{t('ActivityNews.ActivityNews_utils.Th_2')}</th>
                      <th>{t('ActivityNews.ActivityNews_utils.Th_3')}</th>
                      <th>{t('ActivityNews.ActivityNews_utils.Th_4')}</th>
                    </tr>
                  </thead>
                </table>
                <h2 className='list_header'>
                  {t('ActivityNews.ActivityNews_utils.ActivityRules')}
                </h2>

                <ol className='a_requirement'>
                  <li>{activityRules.first}</li>
                  <li>{activityRules.two}</li>
                  <li>{activityRules.three}</li>
                  {/* 也需要去確認四五六裡面有沒有東西，沒東西的話連 li 都不用顯示 */}
                  {showContent && activityRules.four ? (
                    <li>{activityRules.four}</li>
                  ) : null}
                  {showContent && activityRules.five ? (
                    <li>{activityRules.five}</li>
                  ) : null}
                  {showContent && activityRules.six ? (
                    <li>{activityRules.six}</li>
                  ) : null}
                </ol>
              </div>
              <div
                className={`bottom_btn ${showContent ? 'open' : ''}`}
                onClick={() => setShowContent(!showContent)}
              >
                <img className='arrow' src={arrow_up} alt='' />
                <p>{showContent ? HideButton : ShowButton} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityNews;
