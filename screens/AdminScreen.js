import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import AdminEditDetails from "../components/AdminEditDetails";
import AdminDetails from "../components/AdminDetails";

export default class AdminScreen extends React.Component {
  static navigationOptions = {
    title: "Admin"
  };

  state = {
    Name: "wewe",
    Logo: "www.logo.com",
    Description: "this is my stall!",
    Email: "stall@stall.com",
    webAddress: "www.stall.com",
    contactNo: "0125121253",
    edit: false
  };

  render() {
    return this.state.edit ? (
      <ScrollView style={styles.container}>
        {Object.values(this.state).map(value => {
          return (
            <AdminEditDetails
              details={value}
              handleChange={this.handleChange}
            />
          );
        })}
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    ) : (
      <ScrollView style={styles.container}>
        {Object.values(this.state).map((value, i) => {
          let name = Object.keys(this.state)[i];
          return <AdminDetails details={value} name={name} />;
        })}
        <TouchableOpacity onPress={this.editValue}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  handleChange = event => {
    // event.preventDefault();
    let stateKey = event.target.key;
    let stateVal = event.target.value;
    console.log(event.target);
    if (stateKey === "Name") {
      this.setState({
        Name: stateVal
      });
    }
  };

  handleSubmit = () => {
    console.log("clicked");
  };
  editValue = () => {
    this.setState({
      edit: true
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
