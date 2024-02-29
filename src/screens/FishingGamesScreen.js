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
  const moneyTreeID = '30300201';
  const leeFishingID = '30300401';
  const threeColorCros = '30300701';
  const dragonHunt = '30300101';
  const monkeyFishing = '30300601';
  const frogFishing = '30300301';
  const bigMonkeyFishing = '30300501';
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
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${moneyTreeID}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_01} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${leeFishingID}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_02} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${threeColorCros}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_03} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${dragonHunt}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_04} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${monkeyFishing}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_05} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${frogFishing}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={btn_game_06} alt='' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='game-logo'
                      href={`https://fishcity1.hengwei-tech.com:5158/?AccountName=d41d8cd98f00b204e9800998ecf8427e&Token=9aeec672c14610bdfe85716bca3eaf50&UserType=0&SystemIconID=0&AgentID=100&Password=d41d8cd98f00b204e9800998ecf8427e&Viplevel=1&IsNickNameChange=1&NickName=pv35462&UserID=35462&Money=100&Lang=zh&GameID=${bigMonkeyFishing}&jumpType=1&lesheng=1`}
                      target='_blank'
                      rel='noreferrer'
                    >
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
