import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Events"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Events! </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
