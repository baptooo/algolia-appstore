import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import initAppStore from './api/appstore';

const isServer = document.getElementById('root').hasChildNodes();

const render = (content) =>
  ReactDOM[isServer ? 'hydrate' : 'render']((
    <Fragment>
      <CssBaseline />
      <App content={content} />
    </Fragment>
  ), document.getElementById('root'));

initAppStore(render);

// registerServiceWorker();
