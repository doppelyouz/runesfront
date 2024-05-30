import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import back from '/src/assets/common/back.png';

import "./GoBackButton.css";

function GoBackButton({ onClick, link }) {
  return (
    <button className="goBack" onClick={onClick}>
      <img src={back} alt="" />
      {link && <Link to="/" className="link" />}
    </button>
  );
}

GoBackButton.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.bool,
};

export default GoBackButton;
