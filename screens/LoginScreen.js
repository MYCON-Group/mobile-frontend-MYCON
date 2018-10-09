import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as api from "../api";

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
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containers}
            onPress={this.handleCreateAccount}
          >
            <Text style={styles.buttonText}> Create Account </Text>
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

    this.props.screenProps.changeCurrentUser();
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
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 5
  },
  flex: {
    flex: 1,
    justifyContent: "center"
  },
  containers: {
    padding: "2%",
    backgroundColor: "#5EA1CE",
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  header: {
    marginLeft: 10,
    marginRight: 10
  }
});
