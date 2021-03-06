import React from "react";
import { createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import Auth from "./Auth";
import Login from "../screens/LoginScreen";
import CreateUser from "../screens/CreateUser";
import SignedInTabNavigator from "./SignedInTabNavigator";
import ShowStall from "../screens/ShowStallInfo";

export const SignedOut = createSwitchNavigator(
  {
    Auth: Auth,
    Main: MainTabNavigator,
    Login: Login,
    CreateUser: CreateUser,
    ShowStall: ShowStall
  },
  {
    initialRouteName: "Auth",
    backBehavior: "initialRoute"
  }
);

export const SignedIn = createSwitchNavigator(
  {
    Main: SignedInTabNavigator,
    ShowStall: ShowStall
  },
  {
    initialRouteName: "Main",
    backBehavior: "initialRoute"
  }
);

// export const ShowStallInfo = createSwitchNavigator({
//   Main: ShowStall
// });
