import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOnBoardDispatch } from "contexts";
import Colors from "constants/Colors";
import Wobbly from "assets/images/wobbly.svg";
import Images from "constants/Images";

const LOGO_SIZE = 80;

const OnBoarding = ({ navigation }) => {
  const dispatch = useOnBoardDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.tintColor }}>
      <View style={{ height: 300 }}>
        <Wobbly style={{ position: "absolute" }} />
        <Image style={styles.logo} source={Images.logo} />
      </View>
      <View>
        <Text>Hey</Text>
        <TouchableOpacity onPress={() => dispatch({ type: "board" })}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  logo: { height: LOGO_SIZE, width: LOGO_SIZE, marginTop: 60 },
});
