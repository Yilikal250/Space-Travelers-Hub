const url = 'https://api.spacexdata.com/v3/missions';
const GETMISSION = 'Space-Travelers-Hub22/Missions/GETMISSION';

function MissionsReducer(state = [], action) {
  switch (action.type) {
    case GETMISSION:
      return [...action.missions];
    default:
      return state;
  }
}

const GetMission = (missions) => ({
  type: GETMISSION,
  missions,
});

export const FetchMission = () => (dispatch) => {
  const List = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const Data = Object.entries(result);
      Data.forEach((element) => {
        List.push({
          id: element[1].id,
          name: element[1].mission_name,
          description: element[1].description,
        });
      });
      dispatch(GetMission(List));
    });
};

export default MissionsReducer;
