import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";

import mana from '/src/assets/GeneralPage/mana.png';

import "./ManaBalance.css";

function ManaBalance({ className }) {
  return (
    <div className={"manaBalance"}>
      <img src={mana} alt="" />
      <div className="content">
        <p className="manaBalanceText">Mana</p>
        <ProgressBar
          completed={60}
          className="progressBarManaBalance"
          bgColor="#fec14d"
          labelColor="black"
          borderRadius={5}
          maxCompleted={100}
          baseBgColor="#204061"
          barContainerClassName="barContainerClassName"
        />
      </div>
    </div>
  );
}

ManaBalance.propTypes = {
  className: PropTypes.string,
};

export default ManaBalance;
