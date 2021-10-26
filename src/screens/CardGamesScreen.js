import React from 'react';
import './CardGamesScreen.css';

import hotGameTab from './screensImages/hotGameTab_icon.png';
import collectTab from './screensImages/collectTab_icon.png';
import poker from './screensImages/poker_icon.png';
import cow from './screensImages/cow_icon.png';

const CardGamesScreen = () => {
  return (
    <div className='S8-CardGamebg'>
      <div className='CardGameBg'>
        <div className='container'>
          <div className='part1'>
            <ui className='p1-tab'>
              <li className='hotGameTab'>
                <img src={hotGameTab} alt='hotGameTab' />
                <h2>热门游戏</h2>
              </li>
              <li className='collectTab off'>
                <img src={collectTab} alt='collectTab' />
                <h2>我的收藏</h2>
              </li>
            </ui>
            <ul className='tabContainer'>
              <li className='act'></li>
              <li id='collect'></li>
            </ul>
            <div className='dots'>
              <div className='dot act'></div>
              <div className='dot'></div>
            </div>
          </div>
          {/* part2 */}
          <div className='part2'>
            <ui className='p2-tab'>
              <li className='lscardTab off'>
                <img src={poker} alt='poker' />
                <h2>乐胜棋牌</h2>
              </li>
              <li className='lsnnTab '>
                <img src={cow} alt='' />
                <h2>乐胜牛牛</h2>
              </li>
            </ui>
            <ul className='tabContainer'>
              <li className='lscard'></li>
              <li id='lsnn' className='act'></li>
            </ul>
            <div className='dots'>
              <div className='dot act'></div>
              <div className='dot'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGamesScreen;
