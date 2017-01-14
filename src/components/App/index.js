import React from 'react';

// import logo from './logo.svg';
import style from './style.css';

function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        {/* <img src={logo} className={style.appLogo} alt="logo" /> */}
        <h2>Tom React-Express Skeleton</h2>
      </div>
      <div className={style.appIntro}>
        <h5>Adding React</h5>
        <p>
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
        <h5>Node Server</h5>
        <p>
          To start the node server run the command <code>yarn server</code>.
        </p>
      </div>
    </div>
  );
}

export default App;
