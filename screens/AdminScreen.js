import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import AdminEditDetails from "../components/AdminEditDetails";
import AdminDetails from "../components/AdminDetails";
import * as api from "../api";
import SubmitButton from '../components/SubmitButton';

export default class AdminScreen extends React.Component {
  static navigationOptions = {
    title: "Admin"
  };

  state = {
    stallInfo: {
      stall_name: "",
      stall_logo: "",
      stall_description: "",
      stall_email: "",
      stall_web_address: "",
      stall_ctn: ""
    },
    edit: false
  };

  render() {
    const keyNames = [
      "Company Name",
      "Logo URL",
      "Description",
      "Email",
      "Website URL",
      "Contact Number"
    ];
    return this.state.edit ? (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='handled'>
          {Object.values(this.state.stallInfo).map((value, i) => {
            return (
              <AdminEditDetails
                key={i}
                details={value}
                keyName={keyNames[i]}
                handleChange={this.handleChange}
                stallInfoParam={Object.keys(this.state.stallInfo)[i]}
              />
            );
          })}
          <View style={styles.buttonContainer}>
            <SubmitButton name='Submit' handleSubmit={this.handleSubmit} />
          </View>
        </ScrollView>
      </View>
    ) : (
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps='handled'>
            {this.state.stallInfo
              ? Object.values(this.state.stallInfo).map((value, i) => {
                let name = Object.keys(this.state.stallInfo)[i];
                return (
                  <AdminDetails
                    key={i}
                    details={value}
                    keyName={keyNames[i]}
                    name={name}
                    style={styles.container}
                  />
                );
              })
              : null}
            <View style={styles.buttonContainer}>
              <SubmitButton name="Edit" handleSubmit={this.editValue} />
            </View>
          </ScrollView>
        </View>
      );
  }

  componentDidMount() {
    api
      .getStallInfo(this.props.screenProps.currentUser.stall_id)
      .then(response => {
        const stallInfo = {
          stall_name: response.data.stall.stall_name,
          stall_logo: response.data.stall.stall_logo,
          stall_description: response.data.stall.stall_description,
          stall_email: response.data.stall.stall_email,
          stall_web_address: response.data.stall.stall_web_address,
          stall_ctn: response.data.stall.stall_ctn
        };
        this.setState({
          stallInfo: stallInfo
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      api
        .getStallInfo(this.props.screenProps.currentUser.stall_id)
        .then(response => {
          const stallInfo = {
            stall_name: response.data.stall.stall_name,
            stall_logo: response.data.stall.stall_logo,
            stall_description: response.data.stall.stall_description,
            stall_email: response.data.stall.stall_email,
            stall_web_address: response.data.stall.stall_web_address,
            stall_ctn: response.data.stall.stall_ctn
          };
          this.setState({
            stallInfo: stallInfo
          });
        });
  }

  handleChange = (value, key) => {
    const newObject = {
      ...this.state.stallInfo,
      [key]: value
    };
    this.setState({
      stallInfo: newObject
    });
  };

  handleSubmit = () => {
    api.patchStallInfo(
      this.props.screenProps.currentUser.stall_id,
      this.state.stallInfo
    );
    this.setState({
      edit: false
    });
  };

  editValue = () => {
    this.setState({
      edit: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a7ddf",
    paddingTop: 30,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    position: "relative"
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    fontSize: 15
  }
});
