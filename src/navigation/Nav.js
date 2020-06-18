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

const Stack = createStackNavigator();

export const Nav = () => {
  const { onBoarded } = useOnBoardState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "SplashScreen",
          headerShown: false,
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

      {/* {!onBoarded ? (
      ) : (
      )} */}
    </Stack.Navigator>
  );
};
