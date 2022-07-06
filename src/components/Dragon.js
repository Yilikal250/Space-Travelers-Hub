import PropTypes from 'prop-types';

function Dragon(props) {
  const {
    id, name, img,
  } = props;

  return (
    <div className="dragon-container" id={id}>
      <img src={img} alt="dragon" />
      <h3>{name}</h3>
    </div>
  );
}

Dragon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Dragon;
