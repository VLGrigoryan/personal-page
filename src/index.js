import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./ui/common.css";
import "./ui/box.css";
import "./ui/fonts/fonts.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PersonalDetailsContext } from "./contexts/PersonalDetailsContext";
import { data } from "./data/data";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DndProvider backend={HTML5Backend}>
        <PersonalDetailsContext.Provider value={{ data }}>
          <App data={data} />
        </PersonalDetailsContext.Provider>
      </DndProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
