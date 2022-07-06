import { useSelector, useDispatch } from 'react-redux';
import { FetchRocket } from '../../Redux/Rockets/Rockets';
import './Rockets.css';
import NavBar from '../navbar';
import Rocket from './rocket';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (rockets.length === 0) {
    dispatch(FetchRocket());
  }

  return (
    <div>
      <NavBar />
      <h1 className="rocketTitle">Rockets</h1>
      <ul className="rockets">
        {
          rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              img={rocket.img}
              reserved={rocket.reserved}
            />
          ))
        }
      </ul>
    </div>
  );
}
