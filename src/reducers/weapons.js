const weaponsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WEAPONS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default weaponsReducer;
