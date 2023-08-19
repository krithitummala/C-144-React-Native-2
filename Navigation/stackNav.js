import React from "react";
import HomeScreen from "../screens/home";
import TopTabNav from "./topTabNav.js";
import { createStackNavigator } from "@react-navigation/stack";

const AppStackNavigation = createStackNavigator();
export default function StackNav() {
  return (
    <AppStackNavigation.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <AppStackNavigation.Screen name="Home" component={HomeScreen} />
      <AppStackNavigation.Screen name="Articles" component={TopTabNav} />
    </AppStackNavigation.Navigator>
  );
}