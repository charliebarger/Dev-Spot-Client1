const maxWidth = (number) => {
  return `only screen and (max-width: ${number}px)`;
};

const theme = {
  mediaQueries: {
    below850: maxWidth(850),
    below700: maxWidth(700),
    below550: maxWidth(550),
    below400: maxWidth(400),
  },
};

export default theme;
