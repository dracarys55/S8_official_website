import React from 'react';
import './FishingGamesScreen.css';

import btn_game_01 from './screensImages/btn_game_01.png';
import btn_game_02 from './screensImages/btn_game_02.png';
import btn_game_03 from './screensImages/btn_game_03.png';
import btn_game_04 from './screensImages/btn_game_04.png';
import btn_game_05 from './screensImages/btn_game_05.png';
import btn_game_06 from './screensImages/btn_game_06.png';
import btn_game_07 from './screensImages/btn_game_07.png';
import img_shark from './screensImages/img_shark.png';
import img_turtle from './screensImages/img_turtle.png';

const FishingGamesScreen = () => {
  return (
    <div className='fish-game-wrapper'>
      <div className='content'>
        <div className='fish-game-content-logo'>
          <div className='fish-logo-header'></div>
        </div>
        <div className='fish-game-content-main'>
          <div className='btn-last'>
            <img src='img/fishing/btn_last.png' alt='' />
          </div>

          <div className='game-content'>
            <div className='glowT'></div>
            <div className='glowB'></div>
            <div className='game-list'>
              <div className='container'>
                <ul>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_01} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_02} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_03} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_04} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_05} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_06} alt='' />
                    </a>
                  </li>
                  <li>
                    <a className='game-logo' href='/'>
                      <img src={btn_game_07} alt='' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='shark'>
              <img src={img_shark} alt='' />
            </div>
            <div className='turtle'>
              <img src={img_turtle} alt='' />
            </div>
          </div>

          <div className='btn-next'>
            <img src='img/fishing/btn_next.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishingGamesScreen;
