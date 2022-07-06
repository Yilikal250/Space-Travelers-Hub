import { useSelector, useDispatch } from 'react-redux';
import { FetchMission } from '../Redux/Missions/Missions';
import Mission from './mission';
import NavBar from './navbar';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  if (missions.length === 0) {
    dispatch(FetchMission());
  }
  return (
    <div>
      <NavBar />
      <h1>Missions</h1>
      <Mission />
      <table className="mission-container">
        <thead>
          <tr className="tableHead">
            <td className="missionTitle"><h1>Mision</h1></td>
            <td className="mission-description"><h1>Description</h1></td>
            <td className="missionStatus"><h1 className="status">Status</h1></td>
            <td />
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (
            <tr className="tableBody" key={mission.id}>
              <td className="missionTitle"><h1>{mission.name}</h1></td>
              <td className="mission-description"><p>{mission.description}</p></td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
