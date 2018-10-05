import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/MapScreen";
import EventsScreen from "../screens/EventsScreen";
import UpdatesScreen from "../screens/UpdatesScreen";
import AdminScreen from "../screens/AdminScreen";

const EventsStack = createStackNavigator({
  Events: EventsScreen
});

EventsStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-search${focused ? "" : "-outline"}`
          : "md-search"
      }
    />
  )
};

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-map${focused ? "" : "-outline"}` : "md-map"
      }
    />
  )
};

const UpdatesStack = createStackNavigator({
  Updates: UpdatesScreen
});

UpdatesStack.navigationOptions = {
  tabBarLabel: "Update ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-megaphone${focused ? "" : "-outline"}`
          : "md-megaphone"
      }
    />
  )
};

const AdminStack = createStackNavigator({
  Admin: AdminScreen
});

AdminStack.navigationOptions = {
  tabBarLabel: "Admin",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-contact${focused ? "" : "-outline"}`
          : "md-contact"
      }
    />
  )
};

export default createBottomTabNavigator({
  EventsStack,
  MapStack,
  UpdatesStack,
  AdminStack
});
