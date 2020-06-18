import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-switch";

const Checkout = () => {
  const [selected, setSelected] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <Header name="Checkout" standard />
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 25 }}>
        <OptionButton header="payment method" />
        <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 40 }}>
          <MaterialIcons
            name="credit-card"
            size={24}
            color="black"
            style={{ marginRight: 25 }}
          />
          <Text>**** **** **** 4747</Text>
        </View>
        <OptionButton header="Delivery address" />
        <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 40 }}>
          <Feather
            name="home"
            size={24}
            color="black"
            style={{ marginRight: 25 }}
          />
          <Text style={{ width: 160 }}>
            Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia
          </Text>
        </View>
        <OptionButton header="Delivery address" />
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", paddingVertical: 20 }}
          >
            <MaterialIcons
              name="credit-card"
              size={24}
              color="black"
              style={{ marginRight: 25 }}
            />
            <Text>I’ll pick it up myself</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", paddingVertical: 20 }}
          >
            <MaterialIcons
              name="credit-card"
              size={24}
              color="black"
              style={{ marginRight: 25 }}
            />
            <Text>I’ll pick it up myself</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingVertical: 20,
            }}
          >
            <MaterialIcons
              name="credit-card"
              size={24}
              color="black"
              style={{ marginRight: 25 }}
            />
            <Text style={{ flex: 1 }}>By Drone</Text>
            <AntDesign name="check" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text variant="optionHeader">Non - contact - delivery</Text>
          <Switch
            value={selected}
            onValueChange={(val) => setSelected(!selected)}
            disabled={false}
            activeText={"On"}
            inActiveText={"Off"}
            backgroundActive={Colors.bgViolet}
            backgroundInactive={"gray"}
            // circleActiveColor={"#30a566"}
            // circleInActiveColor={"#000000"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const OptionButton = ({ header }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text variant="optionHeader">{header}</Text>
      <TouchableOpacity>
        <Text variant="optionChange">Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
