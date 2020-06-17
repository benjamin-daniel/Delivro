import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useOnBoardState } from "../contexts/onboard";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "screens/OnBoarding";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export const Nav = () => {
  const { onBoarded } = useOnBoardState();
  return (
    <Stack.Navigator>
      {onBoarded ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
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
      )}
    </Stack.Navigator>
  );
};
