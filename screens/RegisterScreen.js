import React, { Component, useState } from 'react';
import { connect } from 'redux';
import { Keyboard, StyleSheet, Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Register',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: 'teal'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Create your account</Text>
        </View>
        <Text>Name</Text>
        <TextInput
          type='text'
          style={styles.textInput}
          placeholder='Name'
          name='name'
          value={name}
          maxLength={20}
          onChange={e => onChange(e)}
          onBlur={Keyboard.dismiss}
        />
        <Text>Email</Text>
        <TextInput
          type='email'
          style={styles.textInput}
          placeholder='Email'
          name='email'
          value={email}
          maxLength={20}
          onChange={e => onChange(e)}
          onBlur={Keyboard.dismiss}
        />
        <Text>Password</Text>
        <TextInput
          type='password'
          style={styles.textInput}
          placeholder='Password'
          name='password'
          value={password}
          maxLength={20}
          onChange={e => onChange(e)}
          onBlur={Keyboard.dismiss}
        />
        <Text>Verify Password</Text>
        <TextInput
          type='password'
          style={styles.textInput}
          placeholder='Confirm password'
          name='verifyPassword'
          value={verifyPassword}
          maxLength={20}
          onChange={e => onChange(e)}
          onBlur={Keyboard.dismiss}
        />
        <Button
          title='Enter'
          onPress={() => this.props.navigation.navigate('Dashboard')}
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
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20
  }
});
