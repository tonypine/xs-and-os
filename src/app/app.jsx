import React from "react";
import { useBaseStyles } from "../theme";

import Board from "../board/board.component";

const App = () => {
  useBaseStyles();

  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
