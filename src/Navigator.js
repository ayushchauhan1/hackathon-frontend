import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import Profile from "./screens/Profile";
import Slot from "./screens/slotbooking";
import VaccineStatus from "./screens/VacineStatus";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Profile" component={Profile} />
    <Screen name="SlotBooking" component={Slot} />
    <Screen name="VaccineStatus" component={VaccineStatus} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
