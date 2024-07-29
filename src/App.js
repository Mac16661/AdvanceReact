import React from "react";
import "./App.css";
import Header from "./stories/Header";

function App() {
  const darkMode = false;

  return (
    //BEM naming convention
    <div className="app">
      <Header darkMode={darkMode} title="Subhodip's FAN CLUB" />
    </div>
  );
}

export default App;
