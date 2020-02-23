const monstersReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MONSTERS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default monstersReducer;
