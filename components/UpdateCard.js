import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { Icon } from "expo";

export default class UpdateCard extends React.Component {
  render() {
    console.log(this.props.update);
    return (
      <View style={styles.container}>
        <View style={styles.iconView}>
          <Icon.Ionicons
            name={Platform.OS === "ios" ? `ios-megaphone` : "md-megaphone"}
            size={30}
            color={"#fff"}
          />
        </View>
        <View>
          <Text style={styles.updateTitle}>
            {this.props.update
              ? this.props.update.updates_body
              : this.props.body}
          </Text>
        </View>
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
    width: "90%"
  },
  updateTitle: {
    color: "#FFFFFF",
    fontSize: 22
  },
  iconView: {
    margin: 10
  }
});
