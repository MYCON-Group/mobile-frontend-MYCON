import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as api from "../api";
import EventCard from "../components/EventCard";

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Events"
  };

  state = {
    events: []
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> Select an Event </Text>
        {this.state.events.map(event => {
          return (
            <View key={event.events_name}>
              <EventCard
                navigation={this.props.navigation}
                updateCurrentEvent={this.props.screenProps.updateCurrentEvent}
                event={event}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents = () => {
    api.getAllEvents().then(response => {
      this.setState({
        events: response.data.events
      });
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#2196F3"
  },
  title: {
    color: "#fff",
    fontSize: 40,
    flex: 1,
    flexDirection: "row",
    textAlign: "center"
  }
});
