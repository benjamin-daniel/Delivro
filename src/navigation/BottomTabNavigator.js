import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "screens/HomeScreen";
import EmptyScreen from "screens/EmptyScreen";
import SubCategory from "screens/SubCategory";
import Images from "constants/Images";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

import CheveronLeft from "assets/icons/chevronleft.svg";
import Icons from "components/Icons";
import Colors from "constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: null }}>
      <Stack.Screen name="HomeRoot" component={HomeScreen} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
    </Stack.Navigator>
  );
};

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.tabIconSelected,
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color: stroke }) => (
            <Icons.Home {...{ stroke, focused }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color: stroke }) => (
            <Icons.Cart {...{ stroke, focused }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color: stroke }) => (
            <Icons.Profile {...{ stroke, focused }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
