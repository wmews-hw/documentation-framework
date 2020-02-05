import React from 'react';
import './App.css';
// import {fs} from 'fs';

const content = require("../node_modules/documentation/src/content.json");

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Documentation framework [MASTER]: {content.html}
        </p>
      </header>
    </div>
  );
}

export default App;
