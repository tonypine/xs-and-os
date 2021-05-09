import { createUseStyles } from "react-jss";

const useBaseStyles = createUseStyles(({ palette }) => ({
  "@global": {
    body: {
      backgroundColor: palette.background.light,
      margin: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, `Segoe UI`, `Roboto`, `Oxygen`, `Ubuntu`, `Cantarell`, `Fira Sans`, `Droid Sans`, `Helvetica Neue`, sans-serif",
      fontSmoothing: "antialiased"
    },
    code: {
      fontFamily:
        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
    }
  }
}));

export default useBaseStyles;
