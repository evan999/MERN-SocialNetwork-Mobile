import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
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
