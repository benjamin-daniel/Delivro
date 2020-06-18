import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import Text from "./Text";
import Colors from "constants/Colors";
import Button from "./Button";

import ShoppingCart from "assets/icons/shoppingcart.svg";
import Images from "constants/Images";

const { BostonImage, CabbageImage, PurpleImage } = Images;
const images = [BostonImage, CabbageImage, PurpleImage];

const Item = ({ id, name, amount, currency, unit, tabPress }) => {
  const imgSource = images[id];
  return (
    <TouchableOpacity onPress={tabPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imgSource} />
      </View>
      <View style={styles.content}>
        <View>
          <Text variant="itemHeader" style={{ marginBottom: 12 }}>
            {name}
          </Text>
          <Text>
            {amount}
            <Text variant="secondary">
              {" "}
              {currency}/{unit}
            </Text>
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            secondary
            variant="secondary"
            icon={<Feather name="heart" size={24} color={Colors.faintGrey} />}
          />
          <Button
            secondary
            variant="secondary"
            buttonStyle={{ backgroundColor: Colors.green }}
            icon={<ShoppingCart />}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: 160,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: Colors.violet,
    marginHorizontal: 10,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
});
