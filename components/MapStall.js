import React, { Component } from 'react';
import {
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";

class MapStall extends Component {
  render() {
    const { i, styles } = this.props
    console.log(i)
    return (
      <TouchableOpacity
        key={`mapItem${i}`}
        style={styles}
      />
    );
  }
}

export default MapStall;