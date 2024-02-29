import React from 'react';

const BalanceTable = ({ title_1, title_2, title_3, title_4 }) => {
  return (
    <table className='balanceTable'>
      <tbody>
        <tr>
          <td>{title_1}</td>
          <td className='amount'>0.00฿</td>
          <td>{title_2}</td>
          <td className='amount'>0.00฿</td>
          <td>{title_3}</td>
          <td className='amount'>0.00฿</td>
          <td>{title_4}</td>
          <td className='amount2'>0.00฿</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BalanceTable;
