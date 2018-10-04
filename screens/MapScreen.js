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
  TouchableOpacity,
  RefreshControl,
  Animated,
  Easing
} from "react-native";
import showStallInfo from "../components/showStallInfo";
import { WebBrowser } from "expo";
import PinchZoomView from "react-native-pinch-zoom-view";
import * as api from "../api";
import MapStall from "../components/MapStall";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: "Map"
  };

  state = {
    refreshing: false,
    mapDimensions: {},
    positions: {}
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
      Object.values(this.state.positions).forEach((position, i) => {
        let newPosition = {
          top: position.stall_y * s,
          left: position.stall_x * s,
          height: position.stall_height * s,
          width: position.stall_width * s,
          transform: [{ rotate: `${position.stall_rotation}deg` }]
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
        globalMapStall: {
          backgroundColor: "blue",
          position: "absolute",
          borderRadius: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1
        },
        ...positions
      });
    }

    return isEmpty(this.state.mapDimensions) ? null : (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
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
              {Object.values(this.state.positions).map((position, i) => (
                <MapStall
                  i={i}
                  styles={[subStyles[`mapItem${i}`], subStyles.globalMapStall]}
                />
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    api.getEvent(1).then(data => {
      let mapDimensions = {
        image: data.event.events_img,
        height: data.event.events_map_height,
        width: data.event.events_map_width
      };

      this.setState({
        mapDimensions,
        positions: data.positions
      });
    });
  }

  componentDidUpdate() {
    if (this.state.refreshing) {
      api.getEvent(1).then(data => {
        let mapDimensions = {
          image: data.event.events_img,
          height: data.event.events_map_height,
          width: data.event.events_map_width
        };

        this.setState({
          mapDimensions,
          positions: data.positions
        });
      });
    }
  }

  showStallInfo = () => {
    return showStallInfo;
  };

  _onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.setState({ refreshing: false });
    });
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
