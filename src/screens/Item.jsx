import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "components/Text";
import Colors from "constants/Colors";
import Header from "components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";
import ShoppingCart from "assets/icons/shoppingcart.svg";
import Button from "components/Button";
import { Feather } from "@expo/vector-icons";

import Images from "constants/Images";
import Layout from "constants/Layout";

const imageWidth = Layout.window.width;
const imageHeight = Layout.window.height * 0.3 + 20;

const Item = ({ route, navigation }) => {
  const item = route.params?.item ?? {};
  const { id, name, amount, currency, unit } = item;
  const cartPress = () => navigation.navigate("Cart");
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 0 }}>
      <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
        <Swiper
          dotColor={Colors.inActiveWhite}
          activeDotColor={Colors.white}
          containerStyle={styles.wrapper}
          loop={false}
        >
          <View testID="Fist Image">
            <Image
              source={Images.BostonImage}
              resizeMode="cover"
              style={styles.bgImage}
              width={Layout.window.width}
            />
          </View>
          <View testID="Fist Image">
            <Image
              source={Images.CabbageImage}
              resizeMode="cover"
              style={styles.bgImage}
              width={Layout.window.width}
            />
          </View>
          <View testID="Fist Image">
            <Image
              source={Images.PurpleImage}
              resizeMode="cover"
              style={styles.bgImage}
              width={Layout.window.width}
            />
          </View>
        </Swiper>
        <View style={styles.mainContent}>
          <ScrollView
            style={{
              backgroundColor: Colors.offWhite,
            }}
          >
            <Text variant="itemHeader" style={{ marginBottom: 12 }}>
              {name}
            </Text>
            <Text variant="mainInfo">
              {amount}
              <Text variant="secondaryInfo">
                {" "}
                {currency}/{unit}
              </Text>
            </Text>
            <Text variant="itemInfo">~ 150 gr / piece</Text>

            <View>
              <Text style={styles.country}>Spain</Text>
              <Text style={styles.content}>
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </Text>
            </View>

            {/* Buttons */}

            <View style={{ flexDirection: "row", marginTop: 50 }}>
              <View>
                <Button
                  secondary
                  variant="secondary"
                  icon={
                    <Feather name="heart" size={24} color={Colors.faintGrey} />
                  }
                />
              </View>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Button
                  secondary
                  variant="secondary"
                  buttonStyle={styles.cartButton}
                  text="ADD TO CART"
                  textVariant="secondaryButton"
                  icon={<ShoppingCart />}
                  onPress={cartPress}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    height: 320,
  },
  bgImage: { width: Layout.window.width, height: imageHeight },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  mainContent: {
    flex: 2,
    top: -20,
    backgroundColor: Colors.offWhite,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  country: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "bold",
  },
  content: {
    color: Colors.primary50,
  },
  cartButton: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Colors.green,
  },
});
