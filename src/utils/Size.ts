const CRITERIA_WIDTH = 1920;
const CRITERIA_HEIGHT = 1080;

export const vw = (px: number) => {
  return (px / CRITERIA_WIDTH) * 100;
};

export const vh = (px: number) => {
  return (px / CRITERIA_HEIGHT) * 100;
};
