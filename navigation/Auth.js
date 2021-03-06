import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image
} from "react-native";
import AppNavigator from "../navigation/AppNavigator";

export default class Auth extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={require("../assets/images/logo_transparent.png")}
            style={{ width: 300, height: 300 }}
          />
          <TouchableOpacity style={styles.button} onPress={this.showLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonHollow}
            onPress={this.showTheApp}
          >
            <Text style={styles.buttonHollowText}>Take me to the app!</Text>
          </TouchableOpacity>
        </View>
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
  button: {
    backgroundColor: "#fff",
    borderRadius: 25,
    margin: 5,
    height: 40,
    width: 300,
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1
  },
  buttonHollow: {
    backgroundColor: "#0a7ddf",
    borderRadius: 25,
    margin: 5,
    width: 300,
    height: 40,
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#0a7ddf",
    padding: 10
  },
  buttonHollowText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    padding: 10
  },
  container: {
    backgroundColor: "#1976D2",
    paddingTop: 100,
    height: "100%",
    width: "100%",
    flex: 1,
    position: "relative"
  },
  innerContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
