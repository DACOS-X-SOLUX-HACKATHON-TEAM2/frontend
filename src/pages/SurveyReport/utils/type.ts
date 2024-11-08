export const getSkinType = (type: number) => {
  if (type === 0) {
    return "건성";
  } else if (type === 1) {
    return "지성";
  } else {
    return "복합성";
  }
};
