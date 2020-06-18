const Images = {
  logo: require("../assets/images/logo.png"),
};

const toArray = () => {
  let keys = Object.keys(Images);
  return keys.map((key) => Images[key]);
};
export default {
  ...Images,
  toArray,
};
