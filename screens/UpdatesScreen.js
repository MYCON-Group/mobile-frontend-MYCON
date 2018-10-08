import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import StallUpdateCard from "../components/StallUpdateCard";
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
    this.socket = io(`http://${socketHost}:9090`, { jsonp: false });
  }

  componentDidMount() {
    this.getAllUpdates();
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevState.state) {
      if (prevState.state.updates.length !== this.state.updates.length) {
        this.getAllUpdates();
      }
    }
  }

  render() {
    return this.props.screenProps.currentUser ? (
      <View>
        <Text> Updates! </Text>
        <Text> LOGGED IN! </Text>

        <TextInput
          onChangeText={this.handleChange}
          placeholder="Post an update!"
        />
        <TouchableOpacity onPress={this.postUpdate}>
          <Text> Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getStallUpdates}>
          <Text> Get Updates </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getStallInfo}>
          <Text> Get Stall info </Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <View>
          {this.state.updates.map(update => {
            return (
              <View>
                <StallUpdateCard update={update} />
              </View>
            );
          })}
        </View>
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
      this.props.screenProps.currentUser.event_id,
      this.props.screenProps.currentUser.stall_id
    );
  };

  postUpdate = () => {
    const { stall_id, event_id } = this.props.screenProps.currentUser;
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
