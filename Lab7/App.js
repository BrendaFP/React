import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic ={
      uri: 'https://img.europapress.es/fotoweb/fotonoticia_20180406145058_640.jpg',
      width: 200,
      height: 150
    };

    return (
      <View style={styles.container}>
        <Text>Soy un perrito!</Text>
          <Image source={pic}/>
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
});
