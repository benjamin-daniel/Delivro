const Images = {
  logo: require("../assets/images/logo.png"),
};

const toArray = () => {
  let keys = Object.keys(images);
  return keys.map((key) => images[key]);
};
export default {
  ...Images,
  toArray,
};
