import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  View
} from "react-native";
import * as api from "../api";
import UpdateCard from "../components/UpdateCard";

export default class ShowStallInfo extends React.Component {
  state = {
    stallInfo: {},
    updates: [],
    email: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stall}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 25
            }}
            source={{ uri: this.state.stallInfo.stall_logo }}
          />
          <Text style={styles.textName}>{this.state.stallInfo.stall_name}</Text>
          <Text style={styles.text}>
            {this.state.stallInfo.stall_web_address}
          </Text>
          <Text style={styles.text}>
            {this.state.stallInfo.stall_description}
          </Text>
          <Text style={styles.textEmail}>
            {this.state.stallInfo.stall_email}
          </Text>
          <Text style={styles.text}>{this.state.stallInfo.stall_ctn}</Text>
          <TextInput
            style={styles.signUp}
            placeholder="Sign up to our mailing list..."
            value={this.state.email}
            onChangeText={this.handleChange}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.state.params.toMap()}
          >
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
          {this.state.updates
            ? this.state.updates
              .map(update => {
                return (
                  <UpdateCard
                    key={update.updates_id}
                    update={update}
                  />
                );
              })
              .reverse()
            : null}
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.getStallInfo();
  }

  handleChange = value => {
    this.setState({
      email: value
    });
  };

  getStallInfo = () => {
    Promise.all([
      api.getStallInfo(this.props.navigation.state.params.id),
      api.getStallUpdates(
        this.props.screenProps.event_id,
        this.props.navigation.state.params.id
      )
    ]).then(([response, updates]) => {
      this.setState({
        stallInfo: response.data.stall,
        updates: updates ? updates.data.updates : []
      });
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
  },
  button: {
    backgroundColor: "#fff",
    width: "30%",
    borderRadius: 25,
    margin: 5,
    height: 40,
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#0a7ddf"
  },
  text: {
    margin: 5,
    fontSize: 30,
    color: "#fff"
  },
  textName: {
    fontSize: 50,
    color: "#fff"
  },
  textEmail: {
    margin: 5,
    fontSize: 15,
    color: "#fff"
  },
  signUp: {
    width: "80%",
    height: 40
  }
});
