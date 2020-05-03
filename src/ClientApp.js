import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// Any other browser-only things

// hydrate is similar to render
// Basically it is expecting there to already be markup in the specified place,
// and to just take over with React from there, do not re-render.
hydrate(<App />, document.getElementById("root"));

// side note: When using hydrate you need to make sure you are not using document anywhere in your app.
// You can still use document if it is inside an effect like useEffect() or ComponentDidMount() etc.
