import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "components/Text";
import Header from "components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "constants/Colors";
import SearchBar from "components/SearchBar";
import CategoryCard from "components/CategoryCard";

const dummyData = [
  {
    name: "Vegetables",
    count: 49,
    id: 0,
  },
  {
    name: "Fruits",
    count: 39,
    id: 1,
  },
  {
    name: "Bread",
    count: 22,
    id: 2,
  },
  {
    name: "Sweets",
    count: 56,
    id: 3,
  },
  {
    name: "Utils",
    count: 79,
    id: 4,
  },
  {
    name: "Beverage",
    count: 67,
    id: 5,
  },
];

const HomeScreen = ({ navigation, ...props }) => {
  const goBack = () => navigation.goBack();
  const search = <SearchBar containerStyles={styles.search} />;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name="Categories" onPress={goBack} />
      </View>

      <FlatList
        style={{ flex: 1, paddingHorizontal: 10 }}
        ListHeaderComponent={search}
        data={dummyData}
        numColumns={2}
        keyExtractor={(item, index) => item.name + ""}
        renderItem={({ item, index }) => (
          <CategoryCard {...item} {...{ index }} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
    marginBottom: 20,
  },
});
