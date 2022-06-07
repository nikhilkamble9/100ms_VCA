import React, { useState } from "react";

const Preview = ({ handlesubmit }) => {
  const [userName, setuserName] = useState("");
  return (
    <div className="Preview">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlesubmit(userName);
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="videoconf"
          id="videoconf"
          placeholder="enter the username to go to video conference"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Preview;
