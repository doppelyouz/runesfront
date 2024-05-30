import cn from 'classnames';

import { setOnClose } from '../../../utils/setOnClose';
import { Button } from '..';

import styles from './HeaderSection.module.scss';

/* import {CloseIcon} from '../../../assets/icons/close.svg?react';
import {ArrowIconn} from '../../../assets/icons/arrow-left.svg?react'; */

export const HeaderSection = ({
  hasForm,
  setHasThisModal = () => {},
  // setHasPrev = () => {},
  // setOnOpen = () => {},
  setIsThisModalClose = () => {},
  hasSuccess,
  closeHandler = () => {},
  hasAddress,
  getModalTitle = () => {},
  title,
}) => {
  // const getBack = () => {
  //   setOnClose(setIsThisModalClose, setHasThisModal);
  //   setOnOpen(setHasPrev);
  // };

  const setClose = () => {
    setOnClose(setIsThisModalClose, setHasThisModal);
    closeHandler(false);
  };

  return (
    <header>
      <div className={styles.header__buttons}>
        <Button
          buttonClassName={cn(
            styles.header__close,
            { [styles.hide]: true}
          )}
          // onClick={() => getBack()}
          disabled={!hasAddress}
        >
     {/*      <ArrowIconn /> */}
        </Button>

        <Button
          buttonClassName={cn(
            styles.header__close,
            { [styles.hide]: hasSuccess}
          )}
          onClick={() => setClose()}
        >
   {/*        <CloseIcon /> */}
        </Button>
      </div>

      <h3 className={styles.header__title}>
        {!title
          ? getModalTitle(hasForm, hasAddress)
          : title
        }
      </h3>
  </header>
  );
};
