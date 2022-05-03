import React from "react";
import * as ReactDOM from 'react-dom'

import App from './app/app';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
