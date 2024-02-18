import React, { useState } from "react";
import logo from './logo.svg';

function Demo() {
  const [stylePath] = useState(
      "/TakeMeWebApp/css/demo.css"
  );

  return (
    <div className="App">
      <div style={{ display: 'none' }}>
          <link rel="stylesheet" type="text/css" href={stylePath} />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Demo;
