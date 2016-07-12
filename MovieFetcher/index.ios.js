/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

const MOCKED_MOVIES_DATA = [
  {title: 'title', year: '2016', posters: {thumbnail: 'https://s3.amazonaws.com/media-p.slid.es/uploads/477360/images/2408018/lnrn_0201.png'}},
];

class MovieFetcher extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      //todo
    );
  }
}

var styles = StyleSheet.create({

});

AppRegistry.registerComponent('MovieFetcher', () => MovieFetcher);
