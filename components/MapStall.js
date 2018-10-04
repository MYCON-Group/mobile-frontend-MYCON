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

  constructor(props) {
    super(props)
    props.socket.on(`stall${this.props.i}`, () => this.setState({ color: this.state.color === 'blue' ? 'red' : 'blue' }))
  }

  render() {
    let { i, styles } = this.props
    const updateStyle = StyleSheet.create({
      updatedColour: {
        backgroundColor: this.state.color
      }
    })
    styles = styles.concat(updateStyle.updatedColour)
    console.log(i)
    return (
      <TouchableOpacity
        key={`mapItem${i}`}
        style={styles}
        onPress={this.emitData}
      />
    );
  }

  emitData = () => {
    this.props.socket.emit('update', `stall${this.props.i}`)
  }
}

export default MapStall;