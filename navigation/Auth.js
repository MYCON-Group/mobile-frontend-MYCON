import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import AppNavigator from "../navigation/AppNavigator";

export default class Auth extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button onPress={this.showLogin} title="Sign in" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            onPress={this.showTheApp}
            title="Show me the app!"
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  showTheApp = () => {
    this.props.navigation.navigate("Main");
  };

  showLogin = () => {
    this.props.navigation.navigate("Login");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: `50%`
  },
  buttonContainer: {
    padding: "2%"
  }
});
