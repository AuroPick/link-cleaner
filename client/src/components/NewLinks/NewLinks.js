import React from "react";
import { useSelector } from "react-redux";

import NewLink from "./NewLink/NewLink";

const NewLinks = () => {
  const links = useSelector((state) => state.links);

  console.log(links);

  return (
    <div>
      <div className="title">
        <h1>Son Linkler</h1>
      </div>
      <div className="new-links">
        {links.map((link) => (
          <NewLink key={link._id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default NewLinks;
