
import PropTypes from 'prop-types';
import './DoubleBorder.css';

function DoubleBorder({
  children,
  borderWeight,
  borderFirstColor,
  borderSecondColor,
  className
}) {
  return (
    <div
      className={`double-border ${className}`}
      style={{
        border: `${borderWeight}px solid ${borderFirstColor}`
      }}
    >
      <div
        className="double-border-inner"
        style={{
          border: `${borderWeight}px solid ${borderSecondColor}`,
          top: `-${borderWeight}px`,
          left: `-${borderWeight}px`,
          right: `-${borderWeight}px`,
          bottom: `-${borderWeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

DoubleBorder.propTypes = {
  children: PropTypes.node.isRequired,
  borderWeight: PropTypes.number.isRequired,
  borderFirstColor: PropTypes.string.isRequired,
  borderSecondColor: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DoubleBorder;
