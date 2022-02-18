import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (event) => {
    const inputFirstName = event.target.value;
    setFirstName(inputFirstName);
  };

  const updateLastName = (event) => {
    const inputLastName = event.target.value;
    setLastName(inputLastName);
  };

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form onSubmit>
        <input
          onChange={updateFirstName}
          name="firstName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={updateLastName}
          name="lastName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
