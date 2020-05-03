import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const App = () => {
  const themeHook = useState("darkblue");

  // This is and example of using code-splitting to improve the performance of the page load
  // Details is now a placeholder component, that will not load this code
  // until later when Details is tried to be rendered for the first time (aka Lazy Loading)
  const Details = lazy(() => import("./Details"));

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* In order to use React.lazy you must wrap something high the tree with React.Suspense
              You should use React.Suspense whereever you want there to be some sort of loading animation,
            through the Suspense fallback and use React.lazy everywhere you just want to code-split */}
          <Suspense fallback={<h1>Loading Route</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
