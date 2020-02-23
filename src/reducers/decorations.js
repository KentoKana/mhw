const decorationsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_DECORATIONS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default decorationsReducer;
