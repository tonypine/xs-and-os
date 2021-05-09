import React from "react";
import { createUseStyles } from "react-jss";
import Cell from "./cell";

const useStyles = createUseStyles(({ palette }) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  },
  board: {
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    width: "80%",
    height: "80%",
    border: `4px solid ${palette.yellow.darker}`
  }
}));

const Board = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.board}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Board;
