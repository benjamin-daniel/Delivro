import React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import Icons from "components/Icons";
import Layout from "constants/Layout";

import Mc from "assets/icons/mc_symbol.svg";

const Card = () => {
  const width = Layout.window.width - 40;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name="Credit / Debit card" />

        {/* Card */}
        <View
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Icons.Card width={width} style={{ position: "absolute" }} />
          <Mc style={{ alignSelf: "flex-end" }} />
          <Text>4747 4747 4747 4747</Text>
          <Text>alexandra Smith</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
