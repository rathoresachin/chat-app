import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

// TODO: import height from status bar
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'rgba(50, 50, 120, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  userNameText: {
    fontSize: 18,
    color: 'white',
  },
  separator: {
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    backgroundColor: 'rgba(160, 50, 50, 0.8)',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 3,
    justifyContent: 'flex-end',
  },
});

const UserInfo = props => (
  <View style={styles.container}>
    <Text style={styles.userNameText}>{props.userName}</Text>
    <View style={styles.separator} />
    <TouchableHighlight
      activeOpacity={0.8}
      style={styles.button}
      onPress={props.onLogout}
    >
      <Text style={styles.buttonText}> Logout </Text>
    </TouchableHighlight>
  </View>
);

UserInfo.propTypes = {
  children: PropTypes.node,
};

UserInfo.defaultProps = {
  children: undefined,
};

export default UserInfo;
