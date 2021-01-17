const color = {
  primary: "#222831",
  secondary: "#393e46",
  blue: "#00adb5",
  gray: "#eeeeee",
};

const elements = {
  title: {
    color: color.primary,
  },
  subtitle: {
    color: color.secondary,
  },
  list: {
    item: {
      border: "1px solid #00adb4",
      borderRadius: "5px",
      boxShadow: "5px 4px 2px 1px rgb(0, 204, 204, 0.3)",
    },
  },
};

const font = {
  fontFamily: {
    regular: "Robo, Sans-Serif",
  },
};

const theme = {
  color,
  font,
  elements,
};

export default theme;
