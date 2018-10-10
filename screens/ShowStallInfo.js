import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  View,
  Linking,
  KeyboardAvoidingView
} from "react-native";
import * as api from "../api";
import UpdateCard from "../components/UpdateCard";

export default class ShowStallInfo extends React.Component {
  state = {
    stallInfo: {},
    updates: [],
    email: "",
    signedUp: false
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.stall}>
          <View style={styles.companyHeader}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 25
              }}
              source={{ uri: this.state.stallInfo.stall_logo }}
            />
            <Text style={styles.textName}>
              {this.state.stallInfo.stall_name}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.goToURL(this.state.stallInfo.stall_web_address)
              }
            >
              <Text style={styles.textWeb}>
                {this.state.stallInfo.stall_web_address}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.textHeader}> Company details</Text>
            <Text style={styles.textDesc}>
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
              disabled={this.state.signedUp ? true : false}
              style={
                this.state.signedUp ? styles.buttonDisabled : styles.button
              }
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHollow}
              onPress={() => this.props.navigation.state.params.toMap()}
            >
              <Text style={styles.buttonTextHollow}> Back </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.companyUpdates}>
            <Text style={styles.textHeader}> Recent updates </Text>
            {this.state.updates
              ? this.state.updates
                  .map(update => {
                    return (
                      <UpdateCard
                        key={update.updates_id}
                        body={update.updates_body}
                      />
                    );
                  })
                  .reverse()
              : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
    this.getStallInfo();
  }

  handleSubmit = () => {
    this.setState({
      email: "",
      signedUp: true
    });
  };

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

  goToURL = URL => {
    Linking.openURL(`https://${URL}`);
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
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10
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
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonDisabled: {
    backgroundColor: "#BDBDBD",
    width: "30%",
    borderRadius: 25,
    margin: 5,
    height: 40,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD"
  },
  buttonHollow: {
    backgroundColor: "#2196F3",
    width: "30%",
    borderRadius: 25,
    margin: 5,
    height: 40,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#0a7ddf"
  },
  buttonTextHollow: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff"
  },
  buttonTextSignedUp: {
    textAlign: "center",
    fontSize: 20,
    color: "green"
  },
  text: {
    margin: 5,
    fontSize: 30,
    color: "#fff"
  },
  textHeader: {
    margin: 5,
    fontSize: 30,
    color: "#BBDEFB"
  },
  textWeb: {
    margin: 5,
    fontSize: 30,
    color: "#2c3e50"
  },
  textDesc: {
    margin: 5,
    fontSize: 22,
    color: "#fff",
    textAlign: "center"
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
  },
  companyHeader: {
    backgroundColor: "#41a5f5",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  },
  companyInfo: {
    backgroundColor: "#2196F3",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  companyUpdates: {
    backgroundColor: "#41a5f5",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  }
});
