import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import StallUpdateCard from "../components/StallUpdateCard";
import * as api from "../api";

export default class UpdatesScreen extends React.Component {
  static navigationOptions = {
    title: "Updates"
  };

  state = {
    updateBody: ""
  };

  render() {
    console.log(this.state.updateBody);
    return this.props.screenProps.currentUser ? (
      <View>
        <Text> Updates! </Text>
        <Text> LOGGED IN! </Text>
        {/* <StallUpdateCard /> */}
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
        <Text> Updates! </Text>
        <Text> LOGGED OUT! </Text>
        <TouchableOpacity onPress={this.getAllUpdates}>
          <Text> Get Update info </Text>
        </TouchableOpacity>
        {/* <StallUpdateCard /> */}
      </View>
    );
  }

  handleChange = text => {
    this.setState({
      updateBody: text
    });
  };

  getAllUpdates = () => {
    console.log(this.props.screenProps.event_id);
    api.getAllUpdates(this.props.screenProps.event_id).then(response => {
      console.log(response.data);
    });
  };

  getStallInfo = () => {
    api
      .getStallInfo(this.props.screenProps.currentUser.stall_id)
      .then(response => {
        console.log(response.data);
      });
  };

  getStallUpdates = () => {
    api
      .getStallUpdates(
        this.props.screenProps.currentUser.event_id,
        this.props.screenProps.currentUser.stall_id
      )
      .then(response => {
        console.log(response.data);
      });
  };

  postUpdate = () => {
    let update = {
      stall_id: this.props.screenProps.currentUser.stall_id,
      events_id: this.props.screenProps.currentUser.event_id,
      updates_body: this.state.updateBody
    };
    api.postUpdate(update).then(response => {
      console.log(response.data);
    });
  };
}
