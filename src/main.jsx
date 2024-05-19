import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/global.css'
import LayOut from "./containers/layout";
import App from "./App";
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <LayOut>
        <App />
      </LayOut>
    </Router>
  </React.StrictMode>
);
