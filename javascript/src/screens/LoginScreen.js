/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 120, 0.8)',
  },
  uperSection: {
    flex: 2,
  },
  lowerSection: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 22,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'rgba(50, 50, 120, 0.8)',
    padding: 10,
    alignSelf: 'center',
  },
});

export const loginScreenKey = 'login_screen';

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.uperSection} />
    <View style={styles.lowerSection}>
      <TextInput
        style={styles.input}
        placeholder="Enter a username"
        placeholderTextColor="rgb(150, 150, 150)"
      />
      <TouchableHighlight
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => alert('Lets get started')}
      >
        <Text style={styles.buttonText}> Get Started </Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default LoginScreen;
