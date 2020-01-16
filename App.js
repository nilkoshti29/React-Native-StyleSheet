import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
        <Text>I am a Text in side View</Text> 
        <Text>Who you are ?</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});

