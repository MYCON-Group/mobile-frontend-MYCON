import React from "react";
import { Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet, View } from "react-native";
import * as api from '../api'


export default class ShowStallInfo extends React.Component {
  state = {
    stallInfo: {},
    updates: [],
    email: ''
  }
  render() {
    console.log(this.state.updates)
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stall}>
          <Image style={{
            width: 100, height: 100, borderRadius: 25
          }} source={{ uri: this.state.stallInfo.stall_logo }}></Image>
          <Text style={styles.textName}>{this.state.stallInfo.stall_name}</Text>
          <Text style={styles.text}>{this.state.stallInfo.stall_web_address}</Text>
          <Text style={styles.text}>{this.state.stallInfo.stall_description}</Text>
          <Text style={styles.textEmail}>{this.state.stallInfo.stall_email}</Text>
          <Text style={styles.text}>{this.state.stallInfo.stall_ctn}</Text>
          <TextInput style={styles.signUp} placeholder='Sign up to our mailing list...' value={this.state.email} onChangeText={this.handleChange}></TextInput>
          {this.state.updates ? this.state.updates.map(update => {
            return <Text >{update.updates_body}</Text>
          }) : null}
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.state.params.toMap()}>
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.getStallInfo()
  }

  handleChange = (value) => {
    this.setState({
      email: value
    })
  }

  getStallInfo = () => {
    Promise.all([api.getStallInfo(this.props.navigation.state.params.id), api.getStallUpdates(this.props.screenProps.currentUser.event_id, this.props.navigation.state.params.id)])
      .then(([response, updates]) => {
        this.setState({
          stallInfo: response.data.stall,
          updates: updates ? updates.data.updates : []
        })
      });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a7ddf',
    padding: 30,
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  stall: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%'
  },
  button: {
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 25,
    margin: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#0a7ddf'
  },
  text: {
    margin: 5,
    fontSize: 30,
    color: '#fff'
  },
  textName: {
    fontSize: 50,
    color: '#fff'
  },
  textEmail: {
    margin: 5,
    fontSize: 20,
    color: '#fff'
  },
  signUp: {
    width: '80%',
    height: 40
  }
})