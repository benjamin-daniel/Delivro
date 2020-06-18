import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Chip from "components/Chip";
import ItemTab from "components/ItemTab";

const majorTags = [
  { name: "Cabbage and lettuce", count: 14 },
  { name: "Cucumber and Tomato", count: 14 },
];

const minorTags = [
  { name: "Onions and garlic", count: 5 },
  { name: "Peppers", count: 7 },
  { name: "Potatoes", count: 6 },
];

const items = [
  { name: "Boston lettuce", amount: 1.5, currency: "$", unit: "piece", id: 0 },
  { name: "Peppers", amount: 1.7, currency: "$", unit: "kg", id: 2 },
  { name: "Savoy Cabbages", amount: 1.6, currency: "$", unit: "kg", id: 1 },
];

const ChipList = ({ children }) => (
  <ScrollView
    style={styles.chipList}
    showsHorizontalScrollIndicator={false}
    horizontal
  >
    {children}
  </ScrollView>
);

const SubCategory = ({ route, navigation }) => {
  const [selected, setSelected] = useState("");
  const headerName = route.params?.name ?? "Vegetables";
  const focus = (chip) => setSelected(chip);
  const goBack = () => navigation.goBack();
  // const tabPress = () => console.log("Yeah");
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name={headerName} onPress={goBack} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <SearchBar containerStyles={styles.search} />
        {/* Chip Lists */}
        <View>
          <ChipList>
            {majorTags.map((tag) => (
              <Chip key={tag.name} {...tag} {...{ focus, selected }} />
            ))}
          </ChipList>
          <ChipList>
            {minorTags.map((tag) => (
              <Chip key={tag.name} {...tag} {...{ focus, selected }} />
            ))}
          </ChipList>
        </View>
        {/* Chip Lists */}

        {/* Items */}
        <View>
          {items.map((item) => {
            const tabPress = () => navigation.navigate("Item", { item });
            return <ItemTab key={item.id} {...item} {...{ tabPress }} />;
          })}
        </View>
        {/* Items */}
      </ScrollView>
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  chipList: { padding: 10 },
});
