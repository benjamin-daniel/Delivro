import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./src/hooks/useCachedResources";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import LinkingConfiguration from "./src/navigation/LinkingConfiguration";
import OnBoarding from "./src/screens/OnBoarding";
import {
  OnBoardProvider,
  useOnBoardState,
  useOnBoardDispatch,
} from "./src/contexts/onboard";
import { Nav } from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <OnBoardProvider>
              <Nav />
            </OnBoardProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
