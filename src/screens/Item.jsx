import React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
        <Text>Item</Text>
      </View>
    </SafeAreaView>
  );
};

export default Item;
