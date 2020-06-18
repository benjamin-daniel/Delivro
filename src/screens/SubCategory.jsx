import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Chip from "components/Chip";

const majorTags = [
  { name: "Cabbage and lettuce", count: 14 },
  { name: "Cucumber and Tomato", count: 14 },
];

const minorTags = [
  { name: "Onions and garlic", count: 5 },
  { name: "Peppers", count: 7 },
  { name: "Potatoes", count: 6 },
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
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name={headerName} onPress={goBack} />
        <SearchBar containerStyles={styles.search} />
      </View>

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
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
    marginBottom: 20,
  },
  chipList: { padding: 10 },
});
