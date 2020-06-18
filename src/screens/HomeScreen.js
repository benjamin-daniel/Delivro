import React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Header from "components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "constants/Colors";

const HomeScreen = ({ navigation, ...props }) => {
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Header name="Categories" onPress={goBack} />
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
