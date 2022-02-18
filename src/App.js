import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setHeadingText(name);
  };

  return (
    <div className="container">
      <h1>Hello {headingText}!</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
