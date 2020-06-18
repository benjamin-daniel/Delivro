import React from "react";
import { View, TouchableOpacity } from "react-native";

import Text from "./Text";
import CheveronLeft from "assets/icons/chevronleft.svg";

const Header = ({ name, onPress }) => {
  return (
    <View style={{ height: 100, justifyContent: "space-evenly" }}>
      <TouchableOpacity {...{ onPress }}>
        <CheveronLeft />
      </TouchableOpacity>
      <Text variant="header">{name}</Text>
    </View>
  );
};

export default Header;
