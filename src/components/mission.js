import PropTypes from 'prop-types';

function Mission(props) {
  const {
    id, name, description,
  } = props;

  return (
    <div className="mission-container" id={id}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
