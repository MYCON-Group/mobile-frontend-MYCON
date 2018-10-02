import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import AdminEditDetails from "../components/AdminEditDetails";

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
    contactNo: "0125121253"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.values(this.state).map(value => {
          return <AdminEditDetails details={value} />;
        })}
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
