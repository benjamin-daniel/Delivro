import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOnBoardDispatch } from "contexts";

const OnBoarding = ({ navigation }) => {
  const dispatch = useOnBoardDispatch();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <View>
        <Text>Hey</Text>
        <TouchableOpacity onPress={() => dispatch({ type: "board" })}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
