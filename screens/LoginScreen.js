import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.flex}>
        <View>
          <Text style={styles.header}> Login </Text>

          <TouchableOpacity>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.userInput}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              style={styles.userInput}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containers}
            onPress={this.handleSubmit}
          >
            <Text> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containers}
            onPress={this.handleCreateAccount}
          >
            <Text> Create Account </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  handleSubmit = () => {
    console.log("clicked");
  };

  handleCreateAccount = () => {
    this.props.navigation.navigate("CreateUser");
  };
}

const styles = StyleSheet.create({
  userInput: {
    borderColor: "grey",
    borderWidth: 1,
    height: 50,
    fontSize: 40
  },
  flex: {
    flex: 1,
    justifyContent: "center"
  },
  containers: {
    padding: "2%",
    backgroundColor: "blue",
    height: 40,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10
  }
});
