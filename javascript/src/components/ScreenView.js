import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

// TODO: import height from status bar
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Platform.OS === 'ios' ? 20 : 0,
  },
});

const ScreenView = props => (
  <View style={styles.container}>
    {props.children}
  </View>
);

ScreenView.propTypes = {
  children: PropTypes.node,
};

ScreenView.defaultProps = {
  children: undefined,
};

export default ScreenView;
