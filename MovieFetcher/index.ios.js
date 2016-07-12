/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const MOCKED_MOVIES_DATA = [
  {title: 'title', year: '2016', posters: {thumbnail: 'https://s3.amazonaws.com/media-p.slid.es/uploads/477360/images/2408018/lnrn_0201.png'}},
];

class MovieFetcher extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 81,  
    height: 53,
  }
});

AppRegistry.registerComponent('MovieFetcher', () => MovieFetcher);
