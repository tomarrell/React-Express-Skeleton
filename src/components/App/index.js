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
      <p className={style.appIntro}>
        To get started, edit <code>src/components/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
