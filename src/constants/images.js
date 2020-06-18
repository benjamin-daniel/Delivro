const VeggieImage = require("../assets/images/Media-2.jpg");
const FruitImage = require("../assets/images/Media-4.jpg");
const BreadImage = require("../assets/images/Media-3.jpg");
const CoffeeImage = require("../assets/images/Media-1.jpg");
const SweetsImage = require("../assets/images/Media-5.jpg");
const RopeImage = require("../assets/images/Media.jpg");

const BostonImage = require("../assets/images/Boston.png");
const CabbageImage = require("../assets/images/Cabbage.png");
const PurpleImage = require("../assets/images/PurpleFlower.png");

const Images = {
  logo: require("../assets/images/logo.png"),
  VeggieImage,
  FruitImage,
  BreadImage,
  CoffeeImage,
  SweetsImage,
  RopeImage,
  BostonImage,
  CabbageImage,
  PurpleImage,
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
