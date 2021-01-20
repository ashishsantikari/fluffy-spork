export function getDateParam() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const month = date.getMonth() + 1;
  const mm = month < 10 ? `0${month}` : month;
  const dt = `${date.getFullYear()}-${mm}-${date.getDate()}`;
  return decodeURI(`>${dt}`);
}

export function getSearchParam(obj) {
  return Object.entries(obj).reduce((agg, [key, value]) => {
    if (key && value) {
      if (!agg) {
        return `${key}:${value}`;
      }
      return `${agg}+${key}:${value}`;
    }
    return agg;
  }, "");
}
