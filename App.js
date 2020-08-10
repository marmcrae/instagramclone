import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import InstaClone from "./src/InstaClone.js";


export default class App extends Component {
  render() {
    return  <NavigationContainer>
                <InstaClone />
              </NavigationContainer>;
  }
}
