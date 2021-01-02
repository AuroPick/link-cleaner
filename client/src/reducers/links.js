const links = (links = [], action) => {
  switch (action.type) {
    case "GET_NEW_LINKS":
      return action.payload;
    default:
      return links;
  }
};

export default links;
