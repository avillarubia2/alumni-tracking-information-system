import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/vstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  
    <BrowserRouter>
    {/* <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    /> */}
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
serviceWorker.unregister();
