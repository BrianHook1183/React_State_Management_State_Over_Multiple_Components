import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleIncreaseFontClick }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <br />
      <button onClick={handleIncreaseFontClick}>Increase Font Size</button>
    </div>
  );
}

export default Header;
