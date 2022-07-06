import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CancelReserve, ReserveRocket } from '../Redux/Rockets/Rockets';

function Rocket(props) {
  const {
    id, name, description, img, reserved,
  } = props;

  const dispatch = useDispatch();

  const ReserveRocketHandler = () => {
    dispatch(ReserveRocket(id));
  };

  const CancelRocketHandler = () => {
    dispatch(CancelReserve(id));
  };

  return (
    <div className="rocket-container" id={id}>
      <img src={img} alt="Rocket" />
      <h3>{name}</h3>
      <div className="description">
        {reserved && (
          <div>
            <p>
              <span className="reserved">Reserved</span>
              {description}
            </p>
          </div>
        )}
        {!reserved && (
          <div>
            <p>{description}</p>
          </div>
        )}
      </div>
      {reserved && (
        <button
          type="button"
          className="reservedBtn"
          onClick={() => {
            CancelRocketHandler();
          }}
        >
          Cancel Reserve
        </button>
      )}
      {!reserved && (
        <button
          type="button"
          className="reserveBtn"
          onClick={() => {
            ReserveRocketHandler();
          }}
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = { reserved: false };

export default Rocket;
