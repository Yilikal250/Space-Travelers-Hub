import { useSelector, useDispatch } from 'react-redux';
import { Fetchdragon, reserveDragon, unreserveDragon } from '../Redux/Dragons/dragons';
import NavBar from './navbar';
import Dragon from './Dragon';

export default function Dragons() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const handleUnreserve = (id) => {
    dispatch(unreserveDragon(id));
  };

  if (dragons.length === 0) {
    dispatch(Fetchdragon());
  }

  return (
    <div>
      <NavBar />
      <h1>Dragons</h1>
      <ul>
        {
          dragons.map((dragon) => (
            <div key={dragon.id}>
              <Dragon
                key={dragon.id}
                id={dragon.id}
                name={dragon.name}
                description={dragon.description}
                img={dragon.img}
              />
              <button className="reserveDragon" type="button" onClick={() => handleReserve(dragon.id)}>Reserve Dragon</button>
              <button className="cancelDragon" type="button" onClick={() => handleUnreserve(item.id)}>Cancel Reservation</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}
