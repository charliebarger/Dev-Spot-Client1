const maxWidth = (number) => {
  return `only screen and (max-width: ${number}px)`;
};

const theme = {
  mediaQueries: {
    below850: maxWidth(850),
    below700: maxWidth(700),
    below600: maxWidth(600),
    below550: maxWidth(550),
    below500: maxWidth(500),
    below425: maxWidth(425),
  },
  colors: {
    primary: `hsla(0, 0%, 0%, 1)`,
    primaryMuted: "hsla(0, 0%, 7%, 1)",
    logoColor: "hsla(215,100%,50%, 1)",
    accent1: "hsla(45°, 100%, 51%, 1)",
    fontColor1: "hsla(0,0%,100%, 1)",
    fontColor2: "rgba(117, 117, 117, 1)",
  },
  fonts: {
    serifPrimary: "'Lora', serif;",
  },
};

export default theme;
