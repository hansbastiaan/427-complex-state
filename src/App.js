import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lastName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
