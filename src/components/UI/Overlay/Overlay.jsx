import cn from 'classnames';
import closeImg from '/src/assets/common/close.png';
import styles from './Overlay.module.scss';

export const Overlay = ({ children, isClose, close }) => {
  
  return (
    <div className={styles.position}>
      <div
        className={cn(
          styles.wrapper,
          { [styles.slideInUp]: !isClose, [styles.slideOutDown]: isClose }
        )}
        onAnimationEnd={() => {
          if (isClose) {
            close();
          }
        }}
      >
        {children}
        <button onClick={close} className={styles.closeWrapper}>
          <img src={closeImg} alt="Close" />
        </button>
      </div>
    </div>
  );
};
