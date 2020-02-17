import React, { Component, useState } from 'react';
import { connect } from 'redux';

import { Keyboard, StyleSheet, Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

/*
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const { name, email, password, verifyPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== verifyPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    this.props.navigation.navigate('Dashboard');
  }
};
*/
export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Create your account</Text>
        </View>
        <Text>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Your name'
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
        <Text>Verify Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Enter password again'
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
        <Button
          title='Enter'
          onPress={() => this.props.navigation.navigate('Home')}
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
