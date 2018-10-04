
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet
} from "react-native";
window.navigator.userAgent = 'react-native'


class MapStall extends Component {

  state = {
    color: 'blue'
  }

  render() {

    let { styles, id } = this.props
    console.log('>>>', this.props, '<<<')
    const updateStyle = StyleSheet.create({
      updatedColour: {
        backgroundColor: this.state.color
      }
    })
    // styles = styles.concat(updateStyle.updatedColour)
    return (
      <TouchableOpacity
        key={`key${id}`}
        style={styles}
        onPress={this.notified}
      />
    );
  }

  componentDidMount() {
    this.props.socket.on(`stall${this.props.id}`, () => this.setState({ color: 'red' }))
  }

  notified = () => {
    this.setState({
      color: 'blue'
    })
  }
}

export default MapStall;
