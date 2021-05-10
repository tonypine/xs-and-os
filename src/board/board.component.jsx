import React, { useMemo, useReducer } from "react";
import { createUseStyles } from "react-jss";
import Cell from "./cell";
import BoardContext from "./board.context";

const useStyles = createUseStyles(({ palette }) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    width: "100vw"
  },
  board: {
    border: `4px solid ${palette.yellow.darker}`,
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    height: "80vh",
    maxHeight: "80vw",
    maxWidth: "80vw",
    width: "80vh"
  }
}));

const ACTIONS = {
  SELECT: "SELECT"
};

const findWinner = cells => {
  let winner;

  ["a", "b", "c"].forEach(row => {
    const { player } = cells[`${row}1`];
    if (
      player !== null &&
      player === cells[`${row}2`].player &&
      player === cells[`${row}3`].player
    ) {
      winner = player;
    }
  });

  ["1", "2", "3"].forEach(column => {
    const { player } = cells[`a${column}`];
    if (
      player !== null &&
      player === cells[`b${column}`].player &&
      player === cells[`c${column}`].player
    ) {
      winner = player;
    }
  });

  return winner;
};

// eslint-disable-next-line consistent-return
const reducer = (state, { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case ACTIONS.SELECT: {
      const { cellId } = payload;
      const { cells, playerTurn } = state;

      cells[cellId].player = playerTurn;
      const winner = findWinner(cells);

      return { ...state, cells, playerTurn: playerTurn === 1 ? 2 : 1, winner };
    }
  }
};

const initialState = {
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
  winner: null
};

const Board = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const context = useMemo(
    () => ({
      ...state,
      selectCell: cellId => {
        dispatch({ type: ACTIONS.SELECT, payload: { cellId } });
      }
    }),
    [state]
  );

  const { cells, winner } = state;

  return (
    <BoardContext.Provider value={context}>
      {!!winner && <span>{winner}</span>}
      <div className={classes.root}>
        <div className={classes.board}>
          {Object.values(cells).map(cell => (
            <Cell cell={cell} key={cell.id} />
          ))}
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default Board;
