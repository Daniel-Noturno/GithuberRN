import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage, ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import api from '../../services/api';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    username: '',
    loading: false,
    error: false,
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  singIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Seja Bem-Vindo</Text>
        <Text style={styles.subTitle}>Para prosseguir precisamos do seu usuário do GitHub</Text>
        {error && <Text style={styles.error}>Usuário Inexistênte</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite aqui seu usuário do GitHub"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.singIn}>
            {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.textButton}>Prosseguir</Text>}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
