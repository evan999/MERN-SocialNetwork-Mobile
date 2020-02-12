import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to DevConnect Mob!</Text>
        <Button
          title='Register'
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
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
  }
});

//export default HomeScreen;
