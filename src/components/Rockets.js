import { useSelector, useDispatch } from 'react-redux';
import { FetchRocket } from '../Redux/Rockets/Rockets';
import NavBar from './navbar';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (rockets.length === 0) {
    dispatch(FetchRocket());
  }

  return (
    <div>
      <NavBar />
      <h1>Rockets</h1>
    </div>
  );
}
