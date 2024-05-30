import './Balance.css'

import Coins from './Coins'

function Balance({realBalance, fehuBalance}) {
  return (
    <div className='balanceContainer'>
        <p className='balanceText'>
            Balance
        </p>
        <Coins realBalance={realBalance} fehuBalance={fehuBalance} />
    </div>
  )
}

export default Balance
