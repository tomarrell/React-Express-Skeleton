import React from 'react';
import classNames from 'classnames';

// import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className={classNames('app')}>
      <div className="app-header">
        {/* <img src={logo} className="app-logo" alt="logo" /> */}
        <h2>Tom React-Express Skeleton</h2>
      </div>
      <p className="app-intro">
        To get started, edit <code>src/components/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
