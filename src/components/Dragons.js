import { useSelector, useDispatch } from 'react-redux';
import { Fetchdragon } from '../Redux/Dragons/dragons';
import NavBar from './navbar';
import Dragon from './Dragon';

export default function Dragons() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

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
            <Dragon
              key={dragon.id}
              id={dragon.id}
              name={dragon.name}
              description={dragon.description}
              img={dragon.img}
            />
          ))
        }
      </ul>
    </div>
  );
}
