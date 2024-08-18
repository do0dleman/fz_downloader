import './popup.css';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  useEffect(() => {
    console.log('hello from the popup!');
  }, []);

  return (
    <div className="container">
      <h1>FZ Download📕</h1>
      <a
        href="https://github.com/do0dleman/fz_downloader"
        className="link-button"
      >
        See Repo
      </a>
      <span>
        <div className="deco-prop" />
        <div className="deco-prop" />
        <div className="deco-prop" />
      </span>
      <div className="bg-sun" />
    </div>
  );
};

const rootElem = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElem);
root.render(<App />);
