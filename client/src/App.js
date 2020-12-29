import React from "react";

import LinkCleaner from "./components/LinkCleaner/LinkCleaner";
import Column from "./components/Column/Column";
import NewLinks from "./components/NewLinks/NewLinks";

function App() {
  return (
    <div className="container">
      <div className="link-cleaner-container">
        <LinkCleaner />
      </div>
      <div className="column">
        <Column />
      </div>
      <div className="new-links-container">
        <NewLinks />
      </div>
    </div>
  );
}

export default App;
