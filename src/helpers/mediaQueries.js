const breakpoints = {
  xs: 500,
  s: 700,
  m: 1200,
  l: 1500,
};

export const queries = {
  biggerPhone: `(min-width: ${breakpoints.xs}px)`,
  tablet: `(min-width: ${breakpoints.s}px)`,
  laptop: `(min-width: ${breakpoints.m}px)`,
  desktop: `(min-width: ${breakpoints.l}px)`,
};
