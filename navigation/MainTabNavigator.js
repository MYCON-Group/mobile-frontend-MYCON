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
import LoginScreen from '../screens/LoginScreen';
import CreateUser from '../screens/CreateUser';

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

const UpdatesStack = createStackNavigator({
  Updates: UpdatesScreen
});

UpdatesStack.navigationOptions = {
  tabBarLabel: "Updates",
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

// const App = createStackNavigator({
//   Login: LoginScreen,
//   CreateUser: CreateUser
// });

export default createBottomTabNavigator({
  MapStack,
  EventsStack,
  UpdatesStack,
  AdminStack
});
