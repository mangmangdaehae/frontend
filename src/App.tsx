import React from "react";
import RandomPhoto from "./components/RandomPhoto";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RandomPhoto />
      </header>
    </div>
  );
};

export default App;
