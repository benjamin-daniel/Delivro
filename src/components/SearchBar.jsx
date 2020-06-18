import React from "react";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import Text from "./Text";
import Search from "assets/icons/search.svg";
import Colors from "constants/Colors";

const SearchBar = ({ containerStyles }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <TextInput
        style={[styles.input, { borderRadius: "50%" }]}
        placeholder="Search"
      />
      <TouchableOpacity style={styles.searchIcon}>
        <Search />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 10,
    borderColor: Colors.faintGrey,
    paddingLeft: 50,
    fontSize: 16,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 10,
    paddingRight: 20,
    alignSelf: "center",
    left: 7.5,
  },
});
