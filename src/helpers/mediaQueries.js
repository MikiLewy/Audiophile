const breakpoints = {
  xs: 300,
  s: 576,
  md: 786,
  l: 992,
  xl: 1200,
  xxl: 1500,
};

export const Queries = {
  mobileMini: `(min-width: ${breakpoints.xs}px)`,
  mobile: `(min-width: ${breakpoints.s}px)`,
  tabletMini: `(min-width: ${breakpoints.md}px)`,
  tablet: `(min-width: ${breakpoints.l}px)`,
  laptop: `(min-width: ${breakpoints.xl}px)`,
  desktop: `(min-width: ${breakpoints.xxl}px)`,
};
