import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Image, TouchableHighlight } from "react-native";
window.navigator.userAgent = "react-native";

class MapStall extends Component {
  state = {
    color: "blue",
    showInfo: false
  };

  render() {
    let { styles, id, logo } = this.props;

    const updateStyle = StyleSheet.create({
      updatedColour: {
        backgroundColor: this.state.color,
        borderRadius: 25,
        padding: 5
      }
    });
    styles = styles.concat(updateStyle.updatedColour);
    return (
      <TouchableHighlight key={`key${id}`} style={styles} onPress={this.notified}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignSelf: "center",
            flex: 1,
            flexDirection: "row",
            borderRadius: 50
          }}
          source={{ uri: logo.stall_logo }}
        />
      </TouchableHighlight>
    );
  }

  componentDidMount() {
    this.props.socket.on(`stall${this.props.id}`, () =>
      this.setState({ color: "green" })
    );
  }

  notified = () => {
    this.setState({
      color: "blue",
      showInfo: true
    });
    this.props.navigation.navigate("ShowStall", {
      toMap: this.props.toMap,
      id: this.props.id
    });
  };
}

export default MapStall;
