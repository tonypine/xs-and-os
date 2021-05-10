import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { ImCross } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";
import PropTypes from "prop-types";
import BoardContext from "./board.context";

const useStyles = createUseStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.yellow.main.string(),
    border: `4px solid ${palette.yellow.darker}`,
    color: palette.yellow.main.darken(0.7).desaturate(0.2).string(),
    cursor: "pointer",
    margin: 0,
    outline: "none",
    padding: 0,
    tapHighlightColor: "transparent",
    "&:hover": {
      backgroundColor: palette.yellow.main.lighten(0.05).string()
    },
    "&:active": {
      backgroundColor: palette.yellow.main.darken(0.05).string()
    }
  }
}));

const Cell = ({ cell }) => {
  const classes = useStyles();
  const { selectCell } = useContext(BoardContext);

  const { player, id } = cell;

  return (
    <button
      className={classes.root}
      onClick={() => !player && selectCell(id)}
      type="button">
      {player &&
        (player === 1 ? <ImCross size={60} /> : <CgShapeCircle size={100} />)}
    </button>
  );
};

Cell.propTypes = {
  cell: PropTypes.shape({
    id: PropTypes.string,
    player: PropTypes.number
  }).isRequired
};

export default Cell;
