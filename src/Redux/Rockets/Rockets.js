const url = 'https://api.spacexdata.com/v3/rockets';
const GETROCKET = 'Space-Travelers-Hub22/Rockets/GETROCKET';

function RocketsReducer(state = [], action) {
  switch (action.type) {
    case GETROCKET:
      return [...action.rockets];
    default:
      return state;
  }
}

const GetRocket = (rockets) => ({
  type: GETROCKET,
  rockets,
});

export const FetchRocket = () => (dispatch) => {
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
          name: element[1].rocket_name,
          description: element[1].description,
          type: element[1].engines.type,
          img: element[1].flickr_images[0],
        });
      });
      dispatch(GetRocket(List));
    });
};

export default RocketsReducer;
