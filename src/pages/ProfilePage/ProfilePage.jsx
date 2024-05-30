import Username from '../../components/Username'
import Balance from '../../components/Balance'
import Presale from '../../components/Presale'
import GoBackButton from '../../components/GoBackButton'
import { MODAL_TYPES } from '../../constants/constants'
import { UserFooter } from '../../components/UserFooter'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './ProfilePage.css'

function ProfilePage() {
  const  [hasModal, setHasModal] = useState(false)
  const user = useRef();
user.current=useSelector(state=>state.user.user)
console.log(user.current.name)
  return (
    <div className="container">
      <div className="innerContainerProfile">
        <div className="mainContentProfile">
          <Username username={user.current.name} />
          <Balance realBalance={user.current.real_balance} fehuBalance={user.current.fehu_balance} />
          <Presale />
        </div>
        <GoBackButton link />
      </div>
      {hasModal && <UserFooter setHasFooter={setHasModal} modalType={MODAL_TYPES.WITHDRAWAL} />}
    </div>
  )
}

export default ProfilePage
