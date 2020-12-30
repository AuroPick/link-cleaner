import React from "react";
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(turkishStrings);

const NewLink = ({ link }) => {
  return (
    <div>
      <p>{link.link}</p>
      <p>
        <TimeAgo date={link.createdAt} formatter={formatter} />
      </p>
    </div>
  );
};

export default NewLink;
