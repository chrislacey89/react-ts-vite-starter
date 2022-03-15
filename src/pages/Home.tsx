import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { useGetTodos } from '../hooks/api/useGetTodos';
import logo from '../logo.svg';

function Home() {
  const [count, setCount] = useState(0);

  useGetTodos();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite React + asdfTypescript 🤘 & <br />
          Eslint 🔥+ Prettier & Stylelint 💅
        </p>

        <div className="body">
          <Button onClick={() => setCount((count) => count + 1)} variant="contained">
            🪂 Click me : {count}
          </Button>
          {/* <Button onClick={() => setCount((count) => count + 1)} variant="contained">
            🪂 Click me : {count}
          </Button> */}

          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </div>
      </header>
      <Toaster />
    </div>
  );
}

export default Home;
