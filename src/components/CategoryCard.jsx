import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

import Colors from "constants/Colors";
import Text from "./Text";
import Layout from "constants/Layout";
import Images from "constants/Images";

const {
  VeggieImage,
  FruitImage,
  BreadImage,
  CoffeeImage,
  SweetsImage,
  RopeImage,
} = Images;

const CategoryImages = {
  0: VeggieImage,
  1: FruitImage,
  2: BreadImage,
  3: SweetsImage,
  4: RopeImage,
  5: CoffeeImage,
};

const CategoryCard = ({ name, count, id, index }) => {
  // determine if the card is on the right or left
  const left = index % 2 == 0;
  const addonStyle = left ? { marginRight: 10 } : { marginLeft: 10 };

  // hack to get real height as cover mode is buggy
  const width = (Layout.window.width - 40) / 2;
  return (
    <TouchableOpacity style={[styles.header, addonStyle]}>
      <View style={{ flex: 3 }}>
        <Image
          resizeMode="cover"
          style={{ width }}
          source={CategoryImages[id]}
        />
      </View>
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text>({count})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 210,
    borderWidth: 1,
    borderColor: Colors.faintGrey,
    overflow: "hidden",
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
  },
});
