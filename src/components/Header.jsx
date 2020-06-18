import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import CheveronLeft from "assets/icons/chevronleft.svg";
import { useSafeArea } from "react-native-safe-area-context";
import Colors from "constants/Colors";

const Header = ({ name, onPress, standard }) => {
  const insets = useSafeArea();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
        standard && { ...styles.standardStyle },
      ]}
    >
      <TouchableOpacity
        style={[standard && styles.cheveronLeft]}
        {...{ onPress }}
      >
        <CheveronLeft />
      </TouchableOpacity>
      <View style={[standard && styles.textContainer]}>
        <Text style={[standard && styles.standardText]} variant="header">
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "space-evenly",
  },
  cheveronLeft: { alignSelf: "center" },
  textContainer: { flex: 1, marginRight: 24, 
    // justifyContent: "center" 
  },
  standardText: { textAlign: "center", fontSize: 18 },
  standardStyle: {
    flexDirection: "row",
    justifyContent: null,
    paddingTop: 40,
    height: 80,
    backgroundColor: Colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
