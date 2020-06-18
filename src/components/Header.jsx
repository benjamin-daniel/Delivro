import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import CheveronLeft from "assets/icons/chevronleft.svg";
import { useSafeArea } from "react-native-safe-area-context";

const Header = ({ name, onPress }) => {
  const insets = useSafeArea();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <TouchableOpacity {...{ onPress }}>
        <CheveronLeft />
      </TouchableOpacity>
      <Text variant="header">{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "space-evenly",
  },
});
