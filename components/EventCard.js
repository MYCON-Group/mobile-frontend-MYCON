import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { Icon } from "expo";

export default class EventCard extends React.Component {
  render() {
    const {
      events_name,
      events_description,
      events_start,
      events_end,
      events_location
    } = this.props.event;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.handleUpdate()}
      >
        <View style={styles.iconView}>
          <Icon.Ionicons
            name={Platform.OS === "ios" ? `ios-star` : "md-star"}
            size={30}
            color={"#fff"}
          />
        </View>
        <View>
          <Text style={styles.eventTitle}> {events_name} </Text>
          <Text style={styles.eventDescription}> {events_description} </Text>
          <Text> Start date: {events_start} </Text>
          <Text> End date: {events_end} </Text>
          <Text> Location: {events_location} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  handleUpdate = () => {
    this.props.updateCurrentEvent(this.props.event.events_id);
    this.props.navigation.navigate("Map", {
      toMap: this.props.toMap,
      id: this.props.id
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1976D2",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BBDEFB",
    borderWidth: 1
  },
  eventTitle: {
    color: "#FFFFFF",
    fontSize: 22
  },
  eventDescription: {
    color: "#BBDEFB",
    fontSize: 16
  },
  iconView: {
    margin: 10
  }
});
