import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import ShowStallInfo from "../navigation/AppNavigator";
window.navigator.userAgent = "react-native";

class MapStall extends Component {
  state = {
    color: "blue",
    showInfo: false
  };

  render() {
    let { styles, id } = this.props;
    const updateStyle = StyleSheet.create({
      updatedColour: {
        backgroundColor: this.state.color
      }
    });
    styles = styles.concat(updateStyle.updatedColour);
    return (
      <TouchableOpacity
        key={`key${id}`}
        style={styles}
        onPress={this.notified}
      />
    );
  }

  componentDidMount() {
    this.props.socket.on(`stall${this.props.id}`, () =>
      this.setState({ color: "red" })
    );
  }

  notified = () => {
    this.setState({
      color: "blue",
      showInfo: true
    });
    this.props.navigation.navigate("ShowStall", { toMap: this.props.toMap, id: this.props.id });
  };
}

export default MapStall;
