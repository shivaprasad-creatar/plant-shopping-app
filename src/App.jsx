import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header style={{ padding: "40px", textAlign: "center", color: "white" }}>
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful plants</p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;

