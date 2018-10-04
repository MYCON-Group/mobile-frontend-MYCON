import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class EventCard extends React.Component {
  render() {
    const { events_name, events_description, events_start, events_end, events_location } = this.props.event
    return (
      <TouchableOpacity >
        <View>
          <Text> {events_name} </Text>
          <Text> {events_description} </Text>
          <Text> {events_start} </Text>
          <Text> {events_end} </Text>
          <Text> {events_location} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
