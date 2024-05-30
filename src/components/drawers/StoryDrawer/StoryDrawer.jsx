import Drawer from "react-modern-drawer";
import GoBackButton from "../../GoBackButton";
import PropTypes from "prop-types";

import "./StoryDrawer.css";

function StoryDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
      zIndex={100}
      size="fit-content"
      className="storyDrawerContainer"
      overlayColor={"rgba(0,0,0,0.5)"}
    >
      <div className="storyDrawer">
        <h1 className="storyTitle">Легенда гласит:</h1>
        <div className="storyDesc">
          <p>
            Если вставить в алтарь рунные камни то через время рунные боги щедро
            наградят того кто это сделал.
          </p>
          <p>Ты можешь купить рунный камень в магазине и совершить обряд.</p>
          <p>
            Помни, что для того чтобы обряд прошел быстро тебе нужно следить за
            уровнем маны.
          </p>
        </div>
        <GoBackButton onClick={toggleDrawer} />
      </div>
    </Drawer>
  );
}

StoryDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default StoryDrawer;
