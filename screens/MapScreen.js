import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";
import { WebBrowser } from "expo";
import PinchZoomView from "react-native-pinch-zoom-view";
// import { MonoText } from "../components/StyledText";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: "Map"
  };

  state = {
    mapDimensions: {
      height: 800,
      width: 973
    },
    positions: [
      {
        position: "absolute",
        top: 187.90234,
        left: 568.33203125,
        height: 121.9375,
        width: 120,
        backgroundColor: "blue"
      },
      {
        position: "absolute",
        top: 0,
        left: 461.4375,
        height: 56.4219,
        width: 117.844,
        backgroundColor: "blue"
      },
      {
        position: "absolute",
        top: 146.26171875,
        left: 225.574,
        height: 72.6641,
        width: 120,
        backgroundColor: "blue"
      },
      {
        position: "absolute",
        top: 275.484,
        left: 67.4179,
        height: 120.328,
        width: 120,
        backgroundColor: "blue"
      }
    ]
  };

  render() {
    let phoneWidth = Dimensions.get("window").width;
    let s = phoneWidth / this.state.mapDimensions.width;

    let positions = {};
    this.state.positions.forEach((position, i) => {
      let newPosition = {
        ...position,
        top: position.top * s,
        left: position.left * s,
        height: position.height * s,
        width: position.width * s
      };
      positions[`mapItem${i}`] = newPosition;
    });
    const subStyles = StyleSheet.create({
      ...positions
    });
    const mapStyles = StyleSheet.create({
      map: {
        width: Dimensions.get("window").width,
        height: this.state.mapDimensions.height * s,
        backgroundColor: "grey"
      }
    });
    return Platform.OS === "ios" ? (
      <View style={styles.container}>
        <ScrollView
          doAnimateZoomReset={false}
          maximumZoomScale={2}
          minimumZoomScale={1}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={mapStyles.map}>
            {this.state.positions.map((position, i) => (
              <View key={`mapItem${i}`} style={subStyles[`mapItem${i}`]} />
            ))}
          </View>
        </ScrollView>
      </View>
    ) : (
      <PinchZoomView>
        <View style={mapStyles.map}>
          {this.state.positions.map((position, i) => (
            <View key={`mapItem${i}`} style={subStyles[`mapItem${i}`]} />
          ))}
        </View>
      </PinchZoomView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
