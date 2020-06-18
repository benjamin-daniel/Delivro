import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOnBoardDispatch } from "contexts";
import Colors from "constants/Colors";
import Wobbly from "assets/images/wobbly.svg";
import BoxIcon from "assets/icons/box.svg";
import Images from "constants/Images";
import BottomSheet from "reanimated-bottom-sheet";
import Text from "components/Text";
import Button from "components/Button";

const LOGO_SIZE = 80;

const InnerContent = ({ navigation }) => {
  const enterApp = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={styles.sheetContainer}>
      <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
        <BoxIcon style={{ marginVertical: 24 }} />
        <Text variant="superHeader">Non-Contact Deliveries</Text>
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: Colors.primary50,
            textAlign: "center",
          }}
        >
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
      </View>
      <Button
        text="ORDER NOW"
        variant="primary"
        containerStyle={styles.button}
        onPress={() => enterApp()}
      />
      <Button
        text="DISMISS"
        containerStyle={styles.button}
        buttonStyle={styles.nullButton}
        bare
      />
    </View>
  );
};

const OnBoarding = ({ navigation }) => {
  const dispatch = useOnBoardDispatch();
  const SheetContent = () => <InnerContent {...{ navigation }} />;
  // TODO: remove
  // navigation.navigate("Root");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.tintColor }}>
      <View style={{ height: 300 }}>
        <Wobbly style={{ position: "absolute" }} />
        <Image style={styles.logo} source={Images.logo} />
      </View>
      <View style={{ flex: 1 }}>
        <BottomSheet
          snapPoints={[600, 500]}
          renderContent={SheetContent}
          initialSnap={1}
          enabledInnerScrolling={false}
        />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  logo: { height: LOGO_SIZE, width: LOGO_SIZE, marginTop: 60 },
  sheetContainer: {
    backgroundColor: Colors.offWhite,
    height: 600,
    padding: 20,
    borderRadius: 30,
  },
  button: {
    marginVertical: 15,
  },
  nullButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
