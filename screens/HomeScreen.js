import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export const CustomButton = props => {
  const { title = 'Register', style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default class HomeScreen extends React.Component {
  static navigationOptions = /*({ navigation }) =>*/ {
    headerTitle: 'DevMob',
    /*
    headerRight: (
      <Button 
        onPress={navigation.navigate('Register')},
        title="Register"
        color="#fff"
      />
    ),
    */
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: 'teal',
      fontFamily: 'Roboto'
    }
  };

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
