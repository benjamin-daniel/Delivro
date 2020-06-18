import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import SearchBar from "components/SearchBar";

const SubCategory = ({ route, navigation }) => {
  const headerName = route.params?.name ?? "Vegetables";
  const goBack = () => navigation.goBack();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header name={headerName} onPress={goBack} />
        <SearchBar containerStyles={styles.search} />
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
});
