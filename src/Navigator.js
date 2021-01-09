import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={LoginScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
