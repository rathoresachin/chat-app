/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import UserInfo from '../components/UserInfo';
import SocketIOClient from 'socket.io-client';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listSection: {
    flex: 1,
  },
  header: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const screenKey = 'chat_list';

class ChatListScreen extends Component {
  constructor(props) {
    super(props);
    //use your own local ip
    this.socket = SocketIOClient('http://192.168.43.27:8080');
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      users: ds.cloneWithRows([{ id: 1, userName: 'user' }]),
    };

    this
      .socket
      .on('users', (users) => {
        console.log('---connnected--')
        this.setState({ users: ds.cloneWithRows(users) });
      });
  }

  onLogout() {
    console.log('onLogout');
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => alert('clicked')}
      >
        <Text>{rowData.userName}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInfo userName={this.props.userName} onLogout={() => this.onLogout()} />
        <View style={styles.header}><Text> Chats </Text></View>
        <View style={styles.listSection}>
          <ListView
            dataSource={this.state.users}
            renderRow={(rowData) => this.renderRow(rowData)}
          />
        </View>
      </View>
    );
  }
}

export default ChatListScreen;
