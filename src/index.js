import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import initAppStore from './api/appstore';

const render = (content) =>
  ReactDOM.render((
    <Fragment>
      <CssBaseline />
      <App content={content} />
    </Fragment>
  ), document.getElementById('root'));

initAppStore(render);

// registerServiceWorker();
