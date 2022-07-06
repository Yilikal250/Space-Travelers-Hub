const url = 'https://api.spacexdata.com/v3/dragons';
const GETDRAGON = 'Space-Travelers-Hub22/dragons/GETDRAGON';

function dragonsReducer(state = [], action) {
  switch (action.type) {
    case GETDRAGON:
      return [...action.dragons];
    default:
      return state;
  }
}

const GetDragon = (dragons) => ({
  type: GETDRAGON,
  dragons,
});

export const Fetchdragon = () => (dispatch) => {
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
          name: element[1].name,
          type: element[1].type,
          img: element[1].flickr_images[0],
        });
      });
      dispatch(GetDragon(List));
    });
};

export default dragonsReducer;
