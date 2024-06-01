import { useState } from "react";
import cn from "classnames";
import "animate.css";

import { RefillModal } from "../RefillModal";
import { WithdrawalModal } from "../WithdrawalModal";
import { MODAL_TYPES } from "../../constants/constants";

import styles from "./UserFooter.module.scss";

export const UserFooter = ({ setHasFooter, modalType }) => {
  const [isClose, setIsClose] = useState(false);

  const setClose = () => {
    setIsClose(true);
    setTimeout(() => {
      setHasFooter(false);
    }, 400);
  };

  const actualContent = () => {
    switch (modalType) {
      case MODAL_TYPES.REFILL:
        return <RefillModal setHasFooter={setClose} />;
      case MODAL_TYPES.WITHDRAWAL:
        return <WithdrawalModal setHasFooter={setClose} />;
      default:
        return null;
    }
  };

  return <footer className={styles.footer}>{actualContent()}</footer>;
};
