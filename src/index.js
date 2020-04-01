export const toArray = data => {
  const keys = Object.keys(data);
  return typeof data[0] === "undefined"
    ? keys
    : keys.slice(keys.length / 2, keys.length);
};
