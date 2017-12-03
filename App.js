import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
var gamesJson = require('./games.json');


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, games: gamesJson}
  }


  update = () => {
    this.setState(prev => {return {counter: prev.counter + 1}})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is john's app.</Text>
        <Text>Changes I make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Click here" onPress={this.update}/>
        <Text>Counter: {this.state.counter} </Text>
        <FlatList
          data={this.state.games}
          renderItem={({item}) => <Text style={styles.item}>{item.home}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
