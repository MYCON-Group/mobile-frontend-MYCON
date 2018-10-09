import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import AdminEditDetails from "../components/AdminEditDetails";
import AdminDetails from "../components/AdminDetails";
import * as api from "../api";

export default class AdminScreen extends React.Component {
  static navigationOptions = {
    title: "Admin"
  };

  state = {
    stallInfo: {
      Name: "",
      Logo: "",
      Description: "",
      Email: "",
      webAddress: "",
      contactNo: ""
    },
    edit: false
  };

  render() {
    return this.state.edit ? (
      <ScrollView style={styles.container}>
        {Object.values(this.state.stallInfo).map((value, i) => {
          return (
            <AdminEditDetails
              key={i}
              details={value}
              handleChange={this.handleChange}
              stallInfoParam={Object.keys(this.state.stallInfo)[i]}
            />
          );
        })}
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    ) : (
      <ScrollView style={styles.container}>
        {this.state.stallInfo
          ? Object.values(this.state.stallInfo).map((value, i) => {
              let name = Object.keys(this.state.stallInfo)[i];
              return <AdminDetails key={i} details={value} name={name} />;
            })
          : null}
        <TouchableOpacity onPress={this.editValue}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  componentDidMount() {
    api.getStallInfo(this.props.screenProps.currentUser).then(response => {
      const stallInfo = {
        Name: response.data.stall.stall_name,
        Logo: response.data.stall.stall_logo,
        Description: response.data.stall.stall_description,
        Email: response.data.stall.stall_email,
        webAddress: response.data.stall.stall_web_address,
        contactNo: response.data.stall.stall_ctn
      };
      this.setState({
        stallInfo: stallInfo
      });
    });
  }

  handleChange = (value, key) => {
    const newObject = {
      ...this.state.stallInfo,
      [key]: value
    };
    this.setState({
      stallInfo: newObject
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  editValue = () => {
    this.setState({
      edit: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#2196F3"
  },
  textInput: {
    height: 40,
    fontSize: 30
  }
});
