export const fetchMonsters = () => dispatch => {
  const url = new URL(`https://mhw-db.com/monsters?`);
  fetch(url)
    .then(response => response.json())
    .then(monsters => {
      dispatch({
        type: "FETCH_MONSTERS",
        payload: monsters
      });
    });
};

export const fetchArmors = () => dispatch => {
  fetch(`https://mhw-db.com/armor`)
    .then(response => response.json())
    .then(armors => {
      dispatch({
        type: "FETCH_ARMORS",
        payload: armors
      });
    });
};

export const fetchWeapons = () => dispatch => {
  fetch(`https://mhw-db.com/weapons`)
    .then(response => response.json())
    .then(weapons => {
      dispatch({
        type: "FETCH_WEAPONS",
        payload: weapons
      });
    });
};

export const fetchDecorations = () => dispatch => {
  fetch(`https://mhw-db.com/decorations`)
    .then(response => response.json())
    .then(decorations => {
      dispatch({
        type: "FETCH_DECORATIONS",
        payload: decorations
      });
    });
};

export const fetchSingleItem = (listType, id) => dispatch => {
  dispatch({
    type: "FETCH_SINGLE_ITEM",
    payload: false
  });
  fetch(`https://mhw-db.com/${listType}/${id}`)
    .then(response => response.json())
    .then(item => {
      dispatch({
        type: "FETCH_SINGLE_ITEM",
        payload: item
      });
    });
};
