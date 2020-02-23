const armorsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ARMORS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default armorsReducer;
