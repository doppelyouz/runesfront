import { ModalMainButton } from '../UI';
import styles from './SuccessSection.module.scss';

export const SuccessSection = ({ closeHandler, content, setIsThisModalClose }) => {
  return (
    <>
      <h5 className={styles.success__subheader}>
        {content}
      </h5>

      <ModalMainButton
        setHasFooter={closeHandler}
        setIsCloseCurrent={setIsThisModalClose}
        content='Закрыть'
      />
    </>
  );
};
