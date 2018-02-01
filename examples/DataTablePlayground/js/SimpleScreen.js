import React from 'react';
import { FlatList } from 'react-native';
import { Cell, Row } from 'react-native-data-table';

export default class SimpleScreen extends React.Component {
  static navigationOptions = {
    title: 'Simple Example',
  };

  keyExtractor = (item, index) => index + item.code;

  renderItem = ({ item }) => (
    <Row>
      <Cell>{item.name}</Cell>
      <Cell>{item.someValue}</Cell>
    </Row>
  );

  render() {
    return <FlatList data={data} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />;
  }
}

const data = [
  { code: 'c1', name: 'Chris', someValue: 3 },
  { code: 'a1', name: 'Andrei', someValue: 8 },
  { code: 'd1', name: 'Dhanya', someValue: 5 },
  { code: 'n1', name: 'Nicole', someValue: 2 },
  { code: 'c2', name: 'Chris 2', someValue: 9 },
  { code: 'c0', name: 'Craig', someValue: 15 },
  { code: 'r1', name: 'Rozanna', someValue: 4 },
];
