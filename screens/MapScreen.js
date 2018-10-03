import React from "react";
import { isEmpty } from "lodash";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import showStallInfo from "../components/showStallInfo";
import { WebBrowser } from "expo";
import PinchZoomView from "react-native-pinch-zoom-view";
import * as api from "../api";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: "Map"
  };

  state = {
    mapDimensions: {},
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
    let phoneHeight;
    let s;
    let positions = {};
    let mapStyles;
    let subStyles;
    if (!isEmpty(this.state.mapDimensions)) {
      phoneHeight = Dimensions.get("window").height;
      s = phoneHeight / this.state.mapDimensions.height;
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
      mapStyles = StyleSheet.create({
        map: {
          height: Dimensions.get("window").height,
          width: this.state.mapDimensions.width * s
        }
      });
      subStyles = StyleSheet.create({
        ...positions
      });
    }

    console.log(mapStyles, positions);

    return isEmpty(this.state.mapDimensions) ? null : (
      <View style={styles.container}>
        <ScrollView>
          <ScrollView
            doAnimateZoomReset={false}
            maximumZoomScale={2}
            horizontal={true}
            minimumZoomScale={0.5}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={mapStyles.map}>
              <Image
                style={{
                  width: this.state.mapDimensions.width * s,
                  height: this.state.mapDimensions.height * s
                }}
                source={{
                  uri: this.state.mapDimensions.image
                }}
              />
              {this.state.positions.map((position, i) => (
                <TouchableOpacity
                  key={`mapItem${i}`}
                  style={subStyles[`mapItem${i}`]}
                />
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    console.log("here....");
    api.getEvent(1).then(event => {
      console.log(event);
      let mapDimensions = {
        image: event.event_img,
        height: event.events_map_height,
        width: event.events_map_width
      };
      this.setState({
        mapDimensions
      });
    });
    // console.log(api.getEvent);
  }

  showStallInfo = () => {
    return showStallInfo;
  };

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
