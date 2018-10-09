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
              onChangeText={this.handleChange}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              style={styles.userInput}
              onChangeText={this.handlePasswordChange}
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

  handleChange = text => {
    this.setState({
      username: text
    });
  };

  handlePasswordChange = text => {
    this.setState({
      password: text
    });
  };

  handleSubmit = () => {
    const submitInfo = {
      username: this.state.username,
      password: this.state.password
    };
    api.getStallName(submitInfo.username).then(response => {
      if (response.status === 200) {
        this.props.screenProps.changeCurrentUser(response.data.stall.stall_id);
      } else {
        // SOMETHING
        console.log(response.status);
      }
    });
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
