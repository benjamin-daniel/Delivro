import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "constants/Colors";
import Text from "./Text";

import { AntDesign } from "@expo/vector-icons";

const ICON_SIZE = 16;
const Chip = ({ name, count, selected, focus }) => {
  const isSelected = selected == name;
  const textVariant = isSelected ? "chipSelected" : "chip";
  const onPressHandler = () => focus(name);
  const icon = isSelected && (
    <AntDesign
      name="check"
      size={ICON_SIZE}
      style={{ marginRight: 10 }}
      color="black"
    />
  );
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        styles.container,
        { borderRadius: "50%" },
        isSelected && { backgroundColor: Colors.bgViolet },
      ]}
    >
      {icon}
      <Text variant={textVariant}>{name} </Text>
      <Text variant={textVariant}>({count})</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
});
