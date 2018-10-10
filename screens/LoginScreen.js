import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Image
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
          <TouchableOpacity>
            <TextInput
              placeholder="Username"
              value={this.state.username}
              underlineColorAndroid="transparent"
              style={styles.userInput}
              onChangeText={this.handleChange}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              placeholder="Password"
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
            style={styles.containersHollow}
            onPress={this.handleCreateAccount}
          >
            <Text style={styles.buttonTextHollow}> Create Account </Text>
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
        this.props.screenProps.changeCurrentUser({
          stall_id: response.data.stall.stall_id
        });
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
    height: 50,
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#fff"
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2196F3"
  },
  containers: {
    padding: "2%",
    backgroundColor: "#1976D2",
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 25,
    borderColor: "#1976D2",
    borderWidth: 1
  },
  containersHollow: {
    padding: "2%",
    backgroundColor: "#fff",
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  buttonTextHollow: {
    color: "#1976D2",
    textAlign: "center"
  },
  header: {
    marginLeft: 10,
    marginRight: 10
  }
});
