import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class EventCard extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text> {this.props.event.events_name} </Text>
          <Text> {this.props.event.events_description} </Text>
          <Text> {this.props.event.events_start} </Text>
          <Text> {this.props.event.events_end} </Text>
          <Text> {this.props.event.events_location} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
