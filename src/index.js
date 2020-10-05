import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './fonts/TiemposFine-Light.otf';
import './fonts/TiemposFine-Regular.otf';
import './fonts/NeueHaasUnicaPro-Bold.otf';
import './fonts/NeueHaasUnicaPro-Regular.otf';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
