import React from "react";
import { View, Text, TextInput } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TextInput
            key={this.props.name}
            value={this.props.details}
            onChange={this.props.handleChange}
          />
        </View>
      </View>
    );
  }
}
