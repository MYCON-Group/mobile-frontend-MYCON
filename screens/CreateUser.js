import React from "react";
import {
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  BackHandler
} from "react-native";

export default class Auth extends React.Component {
  static navigationOptions = {
    title: "Create user"
  };

  state = {
    stall: {
      stall_name: "",
      stall_logo: "",
      stall_description: "",
      stall_email: "",
      stall_web_address: "",
      stall_ctn: 0
    }
  };

  render() {
    console.log(this.state.stall);

    return (
      <ScrollView style={styles.container}>
        <Text> Name </Text>
        <TextInput
          title="name"
          onChangeText={this.handleChangeName}
          value={this.state.stall.stall_name}
          style={styles.textInput}
        />
        <Text> Logo URL </Text>
        <TextInput
          title="logo url"
          onChangeText={this.handleChangeLogo}
          value={this.state.stall.stall_logo}
          style={styles.textInput}
        />
        <Text> Description </Text>
        <TextInput
          title="description"
          onChangeText={this.handleChangeDescription}
          value={this.state.stall.stall_description}
          style={styles.textInput}
        />
        <Text> Email </Text>
        <TextInput
          title="email"
          onChangeText={this.handleChangeEmail}
          value={this.state.stall.stall_email}
          style={styles.textInput}
        />
        <Text> Website </Text>
        <TextInput
          title="web address"
          onChangeText={this.handleChangeWebAddress}
          value={this.state.stall.stall_web_address}
          style={styles.textInput}
        />
        <Text> Contact Number </Text>
        <TextInput
          title="contact number"
          onChangeText={this.handleChangeCtn}
          value={this.state.stall.stall_ctn}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.containers}>
          <Button onPress={this.handleSubmit} title="Create Account" />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  handleChangeName = value => {
    let newStall = {
      ...this.state.stall,
      stall_name: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleChangeLogo = value => {
    let newStall = {
      ...this.state.stall,
      stall_logo: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleChangeDescription = value => {
    let newStall = {
      ...this.state.stall,
      stall_description: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleChangeEmail = value => {
    let newStall = {
      ...this.state.stall,
      stall_email: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleChangeWebAddress = value => {
    let newStall = {
      ...this.state.stall,
      stall_web_address: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleChangeCtn = value => {
    let newStall = {
      ...this.state.stall,
      stall_ctn: value
    };
    this.setState({
      stall: newStall
    });
  };

  handleSubmit = () => {
    api.createStall(this.state.stall).then(response => {
      console.log(response);
    });
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
