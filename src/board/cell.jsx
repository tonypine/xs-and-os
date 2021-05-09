import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.yellow.main,
    border: `4px solid ${palette.yellow.darker}`
  }
}));

const Cell = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default Cell;
