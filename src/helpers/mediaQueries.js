const breakpoints = {
  s: 500,
  m: 769,
  l: 1200,
};

export const queries = {
  tablet: `(min-width: ${breakpoints.s}px)`,
  laptop: `(min-width: ${breakpoints.m}px)`,
  desktop: `(min-width: ${breakpoints.l}px)`,
};
