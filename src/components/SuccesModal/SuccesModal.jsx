import { Modal } from '..';

import styles from './SuccesModal.module.scss';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.50)',
    zIndex: 10,
  },
  content: {
    margin: '0 auto',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    border: 'none',
    borderRadius: '24px',
    backgroundColor: 'transparent',
  },
};

export const SuccesModal = ({ setIsOpen, isModalOpen , isSuccess, isFailure, setter}) => {
  return (
    <Modal
      customStyles={customStyles}
      isOpen={isModalOpen}
      toggleModal={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modal__info}>
          <h3 className={styles.modal__title}>
            {isSuccess ?'Поздравляем!':"Ошибка" }
          </h3>
          <p className={styles.modal__subtitle}>
          {isSuccess ?'Вы успешно купили жабу!':"Недостаточно средств на балансе для приобретения жабы" }
          </p>

       {/*    <p className={styles.modal__subtitle}>
            Минимальная сумма вывода 10$
          </p> */}
        </div>

        <button
          className={styles.modal__close}
          type="button"
          onClick={() => {
            setIsOpen(false)
setter(false)
}}
        >
          Закрыть
        </button>
      </div>
    </Modal>
  );
};
