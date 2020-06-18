import React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";

const EmptyScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.offWhite,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Empty Screen</Text>
    </View>
  );
};

export default EmptyScreen;
