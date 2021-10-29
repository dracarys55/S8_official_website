import React from 'react';
import './MemberCenterpage.css';

import label_hot from '../screensImages/label_hot.png';

const MoneyManageScreen = () => {
  return (
    <div className='memberContent'>
      <div className='deposit_bankCard'>
        <div className='d_bc_part1'>
          <div className='paymentMethod'>
            <span>支付方式:</span>
            <button className='on' id='onlinepayment'>
              <div className='demo-icon-m icon-icon_onlinepayment'></div>
              <span>在线支付</span>
            </button>
            <button id='alipay'>
              <div className='demo-icon-m icon-icon_alipay'></div>
              <span>支付宝支付</span>
            </button>
          </div>
          <div className='paymentChannel'>
            <span>支付渠道:</span>
            <button>
              <div className='demo-icon-m icon-icon_onlinepayment'></div>
              <span>银联转银行</span>
              <img src={label_hot} alt='label_hot' />
            </button>
          </div>
          <div className='payeeBank'>
            <span>汇入银行:</span>
            <div className='p_b_list'>
              <div className='p_b_Name'>
                <img src='img/member/icon_bank.svg' alt='' />
                krungusri bank
              </div>
              <div className='p_b_account'>
                0471597309
                <button>复制</button>
              </div>
              <div className='p_b_account'>
                Squpit maomordee
                <button>复制</button>
              </div>
              <div className='p_b_account'>
                7741072703
                <button>复制</button>
              </div>
            </div>
            <span className='pb_reminder1'>
              <img src='img/member/icon_reminder.svg' alt='' />
              请选择将要上传的转帐凭据
            </span>
          </div>
          <div className='savingAmount'>
            <span>存款金额:</span>
            <input
              id='pb_from'
              type='text'
              placeholder='฿ 最小充值金额50元'
              name='pb_from'
            />
            <span className='pb_reminder2'>
              <img src='img/member/icon_reminder.svg' alt='' />
              请充值最少10元
            </span>
          </div>
          <div className='upload'>
            <label for='payVerify'>上传转款凭证:</label>
            <div className='uploadBg'>
              {/* <img id='payVerifyImg' /> */}
              <div className='uploadBox'>
                <input
                  type='file'
                  id='payVerify'
                  name='payVerify'
                  accept='image/gif, image/jpeg, image/png'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='d_bc_button'>
          <a className='contentButton_1' href='/'>
            提交
          </a>
        </div>
        <div className='d_bc_info'>
          <h3>温馨提示：</h3>
          <ol>
            <li>上面所列银行为“在线支付”所支持的银行，请选择您的银行支付</li>
            <li>在“存款金额”栏目中填写您要支付的金额，并点击“提交”按钮</li>
            <li>存款成功后，需达到一倍有效投注方可提款（放套现、防洗钱</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MoneyManageScreen;
