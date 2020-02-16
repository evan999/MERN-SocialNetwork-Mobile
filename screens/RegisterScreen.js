import React, { Component } from 'react';
import { Keyboard, StyleSheet, Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Register</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder='Your name'
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    alignItems: 'center',
    fontSize: 14
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});
