import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.name}>
        <TextInput
          value={this.props.details}
          onChange={this.props.handleChange}
        />
      </View>
    );
  }
}
