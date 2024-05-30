
import PropTypes from 'prop-types';
import './Coin.css'
import { UserFooter } from '../../../UserFooter';
import { MODAL_TYPES } from '../../../../constants/constants';
import { useState } from 'react';
function Coin({ balance, name, special }) {
  const  [hasModal, setHasModal] = useState(false)
  const handle = ()=>{setHasModal(!hasModal)}
  return (
    <div className='coin'>
      <div className='coinInner'>
        <p className='balance special'>{balance}</p>
      </div>
      <div className={`coinName ${special && "special"}`}>
        {name}
      </div>
      <button className='withdraw' onClick={name=='ton'&& handle}>
        withdraw
      </button>
      {hasModal && <UserFooter setHasFooter={setHasModal} modalType={MODAL_TYPES.WITHDRAWAL} />}
    </div>
  )
}

Coin.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  special: PropTypes.bool
};

export default Coin
