import React from "react";
import { View, Text, TextInput } from "react-native";
import StallUpdateCard from "../components/StallUpdateCard";

export default class UpdatesScreen extends React.Component {
  static navigationOptions = {
    title: "Updates"
  };

  state = {
    latestUpdate: {
      company: "test company",
      body: "test body",
      logo: "test logo"
    }
  };

  render() {
    return this.props.screenProps ? (
      <View>
        <Text> Updates! </Text>
        <Text> LOGGED IN! </Text>
        <StallUpdateCard details={this.state.latestUpdate} />
        <TextInput placeholder="Post an update!" />
      </View>
    ) : (
      <View>
        <Text> Updates! </Text>
        <Text> LOGGED OUT! </Text>
        <StallUpdateCard details={this.state.latestUpdate} />
      </View>
    );
  }
}
