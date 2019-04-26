import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import { HomeScreen } from './HomeScreen'
import { SettingsScreen } from './SettingsScreen'


export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  },
})

