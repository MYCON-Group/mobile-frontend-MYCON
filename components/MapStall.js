import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Platform
} from "react-native";
window.navigator.userAgent = "react-native";
import { Icon } from "expo";

class MapStall extends Component {
  state = {
    updated: false,
    showInfo: false
  };

  render() {
    let { styles, id, logo, dimensions } = this.props;
    console.log(dimensions)
    const height = dimensions.h * 0.9
    const width = dimensions.w * 0.9
    const updateStyle = StyleSheet.create({
      updatedColour: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10
      },
      icons: {
        color: "#fff",
        height: 100,
        width: 100
      }
    });
    styles = styles.concat(updateStyle.updatedColour);
    return (
      <TouchableHighlight
        key={`key${id}`}
        style={styles}
        onPress={this.notified}
      >
        <View >
          <Image
            style={{
              height: height,
              width: width,
              alignSelf: "center",
              flex: 1,
              flexDirection: "row",
              borderRadius: 10
            }}
            source={{ uri: logo.stall_logo }}
          />
          {this.state.updated && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                position: "absolute",
                backgroundColor: "#2ecc71",
                width: 30,
                height: 30,
                top: 0,
                left: 0,
                borderRadius: 50
              }}
            >
              <Icon.Ionicons
                size={30}
                name={Platform.OS === "ios" ? `ios-alert` : "md-alert"}
                style={styles.icons}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  }

  componentDidMount() {
    this.props.socket.on(`stall${this.props.id}`, () =>
      this.setState({ updated: true })
    );
  }

  notified = () => {
    this.setState({
      updated: false,
      showInfo: true
    });
    this.props.navigation.navigate("ShowStall", {
      toMap: this.props.toMap,
      id: this.props.id
    });
  };
}

export default MapStall;
