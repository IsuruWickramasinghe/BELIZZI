import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/global.css'
import LayOut from "./containers/layout";
import App from "./App";
import 'remixicon/fonts/remixicon.css'
import { StateContext } from "./context/StateContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <Router>
        <LayOut>
          <App />
        </LayOut>
      </Router>
    </StateContext>
  </React.StrictMode>
);
