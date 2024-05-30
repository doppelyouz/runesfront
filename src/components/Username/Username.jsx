import avatar from '/src/assets/ProfilePage/avatar.png';
import './Username.css'

function Username({username}) {
  return (
    <div className='usernameContainer'>
        <div className='avatarWrapper'>
            <img src={avatar} alt="" />
        </div>
        <p className='usernameText'>{username}</p>
    </div>
  )
}

export default Username
