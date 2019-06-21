import React, { Component } from 'react';

import {
  View, AsyncStorage, ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import styles from './styles';
import OrganizationsItem from './OrganizationsItem';
import api from '../../services/api';

const tabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: tabIcon,
  };

  state = {
    data: [],
    loading: true,
    refresh: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refresh: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refresh: false });
  }

  renderListItem = ({ item }) => <OrganizationsItem organization={item} />

  renderList = () => {
    const { data, refresh } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        refreshing={refresh}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
