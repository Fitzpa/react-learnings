import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import SearchParams from "./SearchParams";
import Details from "./Details";
import NavBar from "./NavBar";
import store from "./store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
