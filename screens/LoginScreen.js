import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" enabled style={styles.flex}>
        <View>
          <Text style={styles.header}> Login </Text>

          <TouchableOpacity>
            <TextInput
              value={this.state.username}
              underlineColorAndroid="transparent"
              style={styles.userInput}
              onChange={this.handleChange}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              style={styles.userInput}
              onChange={this.handlePasswordChange}
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

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = () => {
    const submitInfo = {
      username: this.state.username,
      password: this.state.password
    };
    //This needs sending to password auth
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
    marginLeft: 10,
    marginRight: 10
  }
});
