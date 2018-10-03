import React from "react";
import { createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import Auth from "./Auth";
import Login from "../screens/LoginScreen";
import CreateUser from "../screens/CreateUser";
import SignedInTabNavigator from "./SignedInTabNavigator";

export const SignedOut = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: Auth,
    Main: MainTabNavigator,
    Login: Login,
    CreateUser: CreateUser
  },
  {
    initialRouteName: "Auth",
    backBehavior: "initialRoute"
  }
);

export const SignedIn = createSwitchNavigator({
  Main: SignedInTabNavigator
});
