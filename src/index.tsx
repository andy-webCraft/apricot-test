import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App";

import "./styles/null.sass";
import "./styles/base.sass";
import "./styles/media.sass";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
