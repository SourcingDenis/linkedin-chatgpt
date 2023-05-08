import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... (existing code for retrieving LinkedIn profile and sending customized message to ChatGPT) ...
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LinkedIn ChatGPT Outreach</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={handleChange}
          />
          <button type="submit">Search LinkedIn Profiles</button>
        </form>
        {chatGPTResponse && (
          <div>
            <h2>Generated LinkedIn Message:</h2>
            <p>{chatGPTResponse}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
