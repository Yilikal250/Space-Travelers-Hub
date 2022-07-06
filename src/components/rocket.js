import PropTypes from 'prop-types';

function Rocket(props) {
  const {
    id, name, description, img,
  } = props;

  return (
    <div className="rocket-container" id={id}>
      <img src={img} alt="Rocket" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
