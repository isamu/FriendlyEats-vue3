export const getStar = (rating) => {
  const ret = [];
  for (let r = 0; r < 5; r += 1) {
    if (r < Math.floor(rating)) {
      ret.push({ id: r, value: "star" });
    } else {
      ret.push({ id: r, value: "star_border" });
    }
  }
  return ret;
};
