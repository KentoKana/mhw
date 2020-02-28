const singleItemReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_ITEM":
      return {
        ...state,
        object: action.payload,
        objectKeys: Object.keys(action.payload)
      };
    default:
      return { ...state };
  }
};

export default singleItemReducer;
