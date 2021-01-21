const initialState = {
  currentPage: 0,
  links: [],
  hasMore: true,
  totalPages: 0,
  totalLinks: 0,
};

const allLinks = (allLinks = initialState, action) => {
  switch (action.type) {
    case "GET_LINKS":
      return {
        ...allLinks,
        currentPage: action.payload.currentPage,
        links: [...allLinks.links,...action.payload.links.map(link => link)],
        hasMore: action.payload.hasMore,
        totalPages: action.payload.totalPages,
        totalLinks: action.payload.totalLinks,
      };
    default:
      return allLinks;
  }
};

export default allLinks;
