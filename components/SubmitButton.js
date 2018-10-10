import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const SubmitButton = ({handleSubmit, disabledBool, name}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={disabledBool}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
      }
})

export default SubmitButton;
