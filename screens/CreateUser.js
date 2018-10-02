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
  TextInput,
  Text
} from "react-native";

export default class Auth extends React.Component {
  static navigationOptions = {
    title: "Create user"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Name </Text>
        <TextInput title="name" style={styles.textInput} />
        <Text> Logo URL </Text>
        <TextInput title="logo url" style={styles.textInput} />
        <Text> Description </Text>
        <TextInput title="description" style={styles.textInput} />
        <Text> Email </Text>
        <TextInput title="email" style={styles.textInput} />
        <Text> Website </Text>
        <TextInput title="web address" style={styles.textInput} />
        <Text> Contact Number </Text>
        <TextInput title="contact number" style={styles.textInput} />
        <TouchableOpacity style={styles.containers}>
          <Button onPress={this.handleSubmit} title="Create Account" />
        </TouchableOpacity>
      </ScrollView>
    );
  }
  handleSubmit = () => {
    //dddd
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  textInput: {
    height: 40,
    fontSize: 30
  }
});
