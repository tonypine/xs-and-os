import Color from "color";

const palette = {
  primary: {
    main: Color("#FF6F61"),
    darker: Color("#FF6F61").darken(0.2).desaturate(0.3)
  },
  yellow: {
    darker: Color("#FDD55E").darken(0.2).desaturate(0.3),
    main: Color("#FDD55E")
  },
  background: {
    light: Color("#F3E4E2")
  }
};

export default palette;
