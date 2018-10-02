import React from "react";
import {
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
      <KeyboardAvoidingView style={styles.flex}>
        <Text> Username: </Text>
        <TouchableOpacity style={styles.containers}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.userInput}
          />
        </TouchableOpacity>
        <Text> Password:</Text>
        <TouchableOpacity style={styles.containers}>
          <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            style={styles.userInput}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containers}>
          <Button onPress={this.handleSubmit} title="Sign In" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containers}>
          <Button onPress={this.handleCreateAccount} title="Create Account" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  handleSubmit = () => {
    //dddd
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
    padding: "2%"
  }
});
