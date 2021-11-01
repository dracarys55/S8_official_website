import React, { useState } from 'react';
import './CardGamesScreen.css';

import hotGameTab from './screensImages/hotGameTab_icon.png';
import collectTab from './screensImages/collectTab_icon.png';
import poker from './screensImages/poker_icon.png';
import cow from './screensImages/cow_icon.png';

const CardGamesScreen = () => {
  const [part_1_off, setPart_1_Off] = useState(true);
  const [part_2_off, setPart_2_Off] = useState(true);
  return (
    <div className='S8-CardGamebg'>
      <div className='CardGameBg'>
        <div className='container'>
          <div className='part1'>
            <ui className='p1-tab'>
              <li
                className={`hotGameTab ${part_1_off ? 'off' : ''}`}
                onClick={() => setPart_1_Off(false)}
              >
                <img src={hotGameTab} alt='hotGameTab' />
                <h2>热门游戏</h2>
              </li>
              <li
                className={`collectTab ${part_1_off ? '' : 'off'}`}
                onClick={() => setPart_1_Off(true)}
              >
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
              <li
                className={`lscardTab ${part_2_off ? 'off' : ''}`}
                onClick={() => setPart_2_Off(false)}
              >
                <img src={poker} alt='poker' />
                <h2>乐胜棋牌</h2>
              </li>
              <li
                className={`lsnnTab ${part_2_off ? '' : 'off'}`}
                onClick={() => setPart_2_Off(true)}
              >
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
