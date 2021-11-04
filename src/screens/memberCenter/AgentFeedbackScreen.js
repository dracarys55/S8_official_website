import React from 'react';
import { useTranslation } from 'react-i18next';
import './MemberCenterpage.css';

const AgentFeedbackScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='memberContent'>
      <div className='agent_feedback_list hide'>
        <div className='sr_tab'>
          <ul className='sr_tab_title'>
            <li className='on'>
              <h2>{t('AgentFeedbackScreen.Sr_tab_title_1')}</h2>
            </li>
            <li>
              <h2>{t('AgentFeedbackScreen.Sr_tab_title_2')}</h2>
            </li>
            <li>
              <h2>{t('AgentFeedbackScreen.Sr_tab_title_3')}</h2>
            </li>
            <li>
              <h2>{t('AgentFeedbackScreen.Sr_tab_title_4')}</h2>
            </li>
            <li>
              <h2>{t('AgentFeedbackScreen.Sr_tab_title_5')}</h2>
            </li>
          </ul>
          <div className='tableStyle1'>
            <table>
              <thead>
                <tr>
                  <th>{t('AgentFeedbackScreen.TableStyle_1')}</th>
                  <th>{t('AgentFeedbackScreen.TableStyle_2')}</th>
                  <th>{t('AgentFeedbackScreen.TableStyle_3')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VIP1</td>
                  <td>1+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}20</td>
                </tr>
                <tr>
                  <td>VIP2</td>
                  <td>2000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}25</td>
                </tr>
                <tr>
                  <td>VIP3</td>
                  <td>10000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}30</td>
                </tr>
                <tr>
                  <td>VIP4</td>
                  <td>30000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}35</td>
                </tr>
                <tr>
                  <td>VIP5</td>
                  <td>50000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}40</td>
                </tr>
                <tr>
                  <td>VIP6</td>
                  <td>70000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}45</td>
                </tr>
                <tr>
                  <td>VIP7</td>
                  <td>100000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}50</td>
                </tr>
                <tr>
                  <td>VIP8</td>
                  <td>150000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}55</td>
                </tr>
                <tr>
                  <td>VIP9</td>
                  <td>200000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}60</td>
                </tr>
                <tr>
                  <td>VIP10</td>
                  <td>300000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}65</td>
                </tr>
                <tr>
                  <td>VIP11</td>
                  <td>500000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}70</td>
                </tr>
                <tr>
                  <td>VIP12</td>
                  <td>800000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}75</td>
                </tr>
                <tr>
                  <td>VIP13</td>
                  <td>1200000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}80</td>
                </tr>
                <tr>
                  <td>VIP14</td>
                  <td>1600000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}85</td>
                </tr>
                <tr>
                  <td>VIP15</td>
                  <td>2000000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}90</td>
                </tr>
                <tr>
                  <td>VIP16</td>
                  <td>3000000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}95</td>
                </tr>
                <tr>
                  <td>VIP17</td>
                  <td>4000000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}100</td>
                </tr>
                <tr>
                  <td>VIP18</td>
                  <td>5000000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}105</td>
                </tr>
                <tr>
                  <td>VIP19</td>
                  <td>6000000+</td>
                  <td>{t('AgentFeedbackScreen.TableStyle_content_3')}110</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentFeedbackScreen;
