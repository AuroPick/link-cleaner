const links = (links = [], action) => {
  switch (action.type) {
    case "GET_NEW_LINKS":
      return action.payload;
    case "POST_LINK":
      return [action.payload, ...links.slice(0, links.length - 1)];
    default:
      return links;
  }
};

export default links;
