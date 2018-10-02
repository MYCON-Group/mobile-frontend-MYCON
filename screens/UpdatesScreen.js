import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
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
    return (
      <View>
        <Text> Updates! </Text>
        <StallUpdateCard details={this.state.latestUpdate} />
      </View>
    );
  }
}
