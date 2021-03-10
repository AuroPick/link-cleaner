import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { getNewLinks, getLinks } from "./actions/links";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewLinks());
    dispatch(getLinks(0));
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
