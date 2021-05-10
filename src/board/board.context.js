import { createContext } from "react";

export const defaultContext = {
  playerTurn: 1,
  cells: {
    a1: { id: "a1", player: null },
    a2: { id: "a2", player: null },
    a3: { id: "a3", player: null },
    b1: { id: "b1", player: null },
    b2: { id: "b2", player: null },
    b3: { id: "b3", player: null },
    c1: { id: "c1", player: null },
    c2: { id: "c2", player: null },
    c3: { id: "c3", player: null }
  },
  selectCell: cellId => cellId
};

const BoardContext = createContext(defaultContext);

export default BoardContext;
