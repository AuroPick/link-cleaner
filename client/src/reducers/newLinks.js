const newLinks = (newLinks = [], action) => {
  switch (action.type) {
    case "GET_NEW_LINKS":
      return action.payload;
    case "POST_LINK":
      return [action.payload, ...newLinks.slice(0, newLinks.length - 1)];
    default:
      return newLinks;
  }
};

export default newLinks;
