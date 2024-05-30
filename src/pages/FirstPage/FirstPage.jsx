import background from '/src/assets/FirstPage/background.png';
import stone from '/src/assets/FirstPage/stone.png';
import logo from '/src/assets/FirstPage/logo.png';

import './FirstPage.css';

function FirstPage() {
  return (
    <div className='containerFirstPage'>
      <div className='firstBackgroundWrapper'>
        <img src={background} alt="" />
      </div>
      <div className='stoneWrapper'>
        <img src={stone} alt="" />
      </div>
      <div className='logoWrapper'>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default FirstPage;
