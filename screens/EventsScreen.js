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
        <Text> Events! </Text>
        {this.state.events.map(event => {
          return (
            <View>
              <EventCard event={event} />
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
    backgroundColor: "#fff"
  }
});
