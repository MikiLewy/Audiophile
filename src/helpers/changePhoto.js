export const changePhoto = (mobileImg, tabletImg, desktopImg, width) => {
  if (width < 768) {
    return mobileImg;
  }
  if (width >= 768 && width < 1200) {
    return tabletImg;
  }
  if (width >= 1200) {
    return desktopImg;
  }
};
