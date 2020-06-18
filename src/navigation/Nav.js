import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useOnBoardState } from "../contexts/onboard";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import OnBoarding from "screens/OnBoarding";
import BottomTabNavigator from "./BottomTabNavigator";
import Text from "components/Text";
import Item from "screens/Item";

const Stack = createStackNavigator();

export const Nav = () => {
  const { onBoarded } = useOnBoardState();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          title: "SplashScreen",
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: "pop",
        }}
        name="Onboarding"
        component={OnBoarding}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Root"
        component={BottomTabNavigator}
      />
      <Stack.Screen name="Item" component={Item} />

      {/* {!onBoarded ? (
      ) : (
      )} */}
    </Stack.Navigator>
  );
};
