import React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";

const EmptyScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name="Header" />
      </View>
    </View>
  );
};

export default EmptyScreen;
