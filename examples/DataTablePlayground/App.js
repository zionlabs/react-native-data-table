import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { SimpleScreen } from './js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Examples!',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Button title="Simple" onPress={() => navigation.navigate('Simple')} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default StackNavigator({ // eslint-disable-line
  Home: { screen: HomeScreen },
  Simple: { screen: SimpleScreen },
});
