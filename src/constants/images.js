const Images = {
  logo: require("../assets/images/logo.png"),
};

const SvgIcons = {
  back: require("../assets/icons/chevronleft.svg"),
};

const toArray = () => {
  let keys = Object.keys(Images);
  return keys.map((key) => Images[key]);
};
export default {
  ...Images,
  ...SvgIcons,
  toArray,
};
