const links = (links = [], action) => {
  switch (action.type) {
    case "GET_NEW_LINKS":
      return action.payload;
    case "POST_LINK":
      return [...links, action.payload];
    default:
      return links;
  }
};

export default links;
