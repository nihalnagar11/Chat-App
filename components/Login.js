import React from 'react';
import {
  StyleSheet, Text,
  TextInput, TouchableOpacity, View,
  Button, ImageEditor,
} from 'react-native';
import firebaseSvc from '../Firebase';
import firebase from 'firebase';
import { auth, initializeApp, storage } from 'firebase';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Chat App',
  };

  state = {
    name: 'Nihal nagar',
    email: 'nagarnihal12@gmail.com',
    password: 'test12',
    avatar: 'https://placeimg.com/140/141/any',
  };

  // using Fire.js
  onPressLogin = async () => {
    console.log('pressing login... email:' + this.state.email);
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    };

    firebaseSvc.login(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Chat', {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
    });
  };
  loginFailed = () => {
    console.log('login failed ***');
    alert('Login failure. Please tried again.');
  };


  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });


  render() {
    return (
      <View>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="test3@gmail.com"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextPassword}
          value={this.state.password}
        />
        <View style={{ margin: 20 }}>
          <Button
            title="Login"
            style={styles.buttonText}
            onPress={this.onPressLogin}
          />
          </View>
          <View style={{ margin: 20 }}>
          <Button
            title="create new account"
            style={styles.buttonText}

            onPress={() => this.props.navigation.navigate("CreateAccount")}
          />
        </View>
      </View>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: 40,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
    fontSize: offset,
  },
  buttonText: {
    fontSize: 42,
    padding: 20
  },
});

export default Login;
