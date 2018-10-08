import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
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
        borderRadius: 25
      }
    });
    styles = styles.concat(updateStyle.updatedColour);
    return (
      <TouchableOpacity key={`key${id}`} style={styles} onPress={this.notified}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            alignSelf: "center",
            flex: 1,
            flexDirection: "row",
            borderRadius: 25
          }}
          source={{ uri: logo.stall_logo }}
        />
      </TouchableOpacity>
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
    this.props.navigation.navigate("ShowStall", {
      toMap: this.props.toMap,
      id: this.props.id
    });
  };
}

export default MapStall;
