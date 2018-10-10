import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import StallUpdateCard from "../components/StallUpdateCard";
import UpdateCard from "../components/UpdateCard";
import * as api from "../api";
window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";
import { socketHost } from "../api";

export default class UpdatesScreen extends React.Component {
  static navigationOptions = {
    title: "Updates"
  };

  state = {
    updateBody: "",
    updates: []
  };

  constructor() {
    super();
    this.socket = io(`http://${socketHost}:443`, { jsonp: false });
  }

  componentDidMount() {
    this.props.screenProps.currentUser ? this.getStallUpdates() : this.getAllUpdates();
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevState.state) {
      if (prevState.state.updates.length !== this.state.updates.length) {
        this.props.screenProps.currentUser ? this.getStallUpdates() : this.getAllUpdates();
      }
    }
  }

  render() {
    return this.props.screenProps.currentUser ? (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stall}>
          <Text style={styles.updateHeader}> Post an Update</Text>
          <TextInput
            onChangeText={this.handleChange}
            placeholder="Post an update!"
          />
          <TouchableOpacity onPress={this.postUpdate}>
            <Text> Post</Text>
          </TouchableOpacity>
          <View>
            {this.state.updates.map(update => {
              return (
                <UpdateCard
                  key={update.updates_id}
                  body={update.updates_body} />
              );
            })}
          </View>
        </ScrollView>
      </View>
    ) : (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.stall}>
            <Text style={styles.updateHeader}> Recent Updates </Text>
            <View>
              {this.state.updates.map(update => {
                return (
                  <UpdateCard
                    key={update.updates_id}
                    body={update.updates_body} />
                );
              })}
            </View>
          </ScrollView>
        </View>
      );
  }

  handleChange = text => {
    this.setState({
      updateBody: text
    });
  };

  getAllUpdates = () => {
    api.getAllUpdates(this.props.screenProps.event_id).then(response => {
      if (response.data.update) {
        this.setState({
          updates: response.data.update
        });
      }
    });
  };

  getStallUpdates = () => {
    api.getStallUpdates(
      this.props.screenProps.event_id,
      this.props.screenProps.currentUser.stall_id
    ).then(response => {
      this.setState({
        updates: response.data.updates
      })
    })
  };

  postUpdate = () => {
    const { stall_id } = this.props.screenProps.currentUser;
    const { event_id } = this.props.screenProps;
    let update = {
      stall_id: stall_id,
      events_id: event_id,
      updates_body: this.state.updateBody
    };
    api.postUpdate(update).then(response => {
      this.socket.emit("update", `stall${stall_id}`);
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a7ddf",
    paddingTop: 30,
    paddingBottom: 30,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    position: "relative"
  },
  stall: {
    alignItems: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
  // ,
  // updateHeader: {
  //   color: "#fff",
  //   fontSize: 40,
  //   flexDirection: "row",
  //   textAlign: "center"
  // }
});
