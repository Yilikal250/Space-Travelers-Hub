import { useSelector, useDispatch } from 'react-redux';
import { Fetchdragon } from '../Redux/Dragons/dragons';
import NavBar from './navbar';

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
    </div>
  );
}
