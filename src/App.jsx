import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

/* 
Add a button to the header which increases the font size of the content. Initialize the font size to 12 and increase it by 2 with each button click.

*Specific Instructions
The button should be after the login button
*/

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12);
  const increaseFontSize = () => setFontSize(fontSize + 2);
  return (
    <div>
      <Header
        loggedIn={loggedIn}
        handleLoggedInClick={toggleLoggedIn}
        handleIncreaseFontClick={increaseFontSize}
      />
      <Content loggedIn={loggedIn} fontSize={fontSize} />
    </div>
  );
}

export default App;
