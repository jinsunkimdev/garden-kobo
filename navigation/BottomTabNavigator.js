import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import AccountScreen from "../screens/Account";
import { Platform } from "react-native";
import colors from "../constants/colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

const BottomTabNavigator = () => {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "account") {
            iconName = focused ? "person-fill" : "person";
          }

          return <Octicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: Platform.OS !== "ios" && { height: 55 },
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerTintColor: colors.tabIconSelected,
        headerShown:false,
      })}
    >
      <BottomTab.Screen name="home" component={HomeScreen} />
      <BottomTab.Screen name="account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};
export default BottomTabNavigator;