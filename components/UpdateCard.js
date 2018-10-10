import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView
} from "react-native";
import { Icon } from "expo";
import moment from 'moment';

export default class UpdateCard extends React.Component {
  render() {
    const {updates_body, updates_time} = this.props.update
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.iconView}>
          <Icon.Ionicons
            name={Platform.OS === "ios" ? `ios-megaphone` : "md-megaphone"}
            size={30}
            color={"#fff"}
          />
        </View>
        <View>
          <Text style={styles.updateTitle}>
            {updates_body}
          </Text>
          <Text>{moment(updates_time).fromNow()}</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
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
    borderWidth: 1,
    width: 300
  },
  updateTitle: {
    color: "#FFFFFF",
    fontSize: 22
  },
  iconView: {
    margin: 10
  }
});
