import React from "react";
import {
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
      <KeyboardAvoidingView>
        <Text> Username: </Text>
        <TouchableOpacity>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.userInput}
          />
        </TouchableOpacity>
        <Text> Password:</Text>
        <TouchableOpacity>
          <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            style={styles.userInput}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  userInput: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1
  }
});
