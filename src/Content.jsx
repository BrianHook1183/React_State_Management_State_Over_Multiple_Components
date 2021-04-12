import React from "react";

function Content({ loggedIn, fontSize }) {
  return loggedIn && <p style={{ fontSize }}>CONTENT</p>;
}

export default Content;
