import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <Pet name="Missy" animal="Cat" breed="Orange/Black Mixed" />
      <Pet name="Mochi" animal="Gecko" breed="Leopard" />
      <Pet name="Rocket" animal="Dwarf Hamster" breed="Winter White" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
