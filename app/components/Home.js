'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

let ExScreen = require('../../ExScreen');
let Footer = require('./Footer');
let Countdown = require('./Countdown');
let HORIZ_SPACE = 12;

import exStyles from '../styles/styles'
import constants from '../constants/constants'

class Home extends Component {
  _handleLink (routeId) {
    this.props.navigator.push({
      id: routeId
    })
  }
  render () {
    return (
      <ExScreen
        title="Orton's Bachelor Party"
        headerColor={constants.orange}
        scrollEnabled={true}
        style={styles.container}>
        <Image
          source={{uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/ortons-dance-party.png'}}
          style={styles.heroImage}>
        </Image>
        <Countdown toDate={1460163600000} title="Countdown until we send Jon off in style" />
        <View style={styles.links}>
          <TouchableHighlight
            style={styles.link1}
            underlayColor='#E65100'
            onPress={() => {this._handleLink('location')}}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Location</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.link2}
            underlayColor='#E65100'
            onPress={() => {this._handleLink('prefunk')}}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Prefunk</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.link3}
            underlayColor='#E65100'
            onPress={() => {this._handleLink('carpool')}}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Carpool</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.link4}
            underlayColor='#E65100'
            onPress={() => {this._handleLink('events')}}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Events</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.link5}
            underlayColor='#E65100'
            onPress={() => {this._handleLink('leaderboard')}}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Leaderboard</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
        </View>
        <Footer />
      </ExScreen>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.orange,
  },
  heroImage: {
    flex: 1,
    height: 200,
    resizeMode: 'cover'
  },
  link: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  link1: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA726'
  },
  link2: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9800'
  },
  link3: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FB8C00'
  },
  link4: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F57C00'
  },
  link5: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF6C00',
    borderBottomWidth: 1,
    borderBottomColor: '#FFE0B2'
  },
  linkText: {
    color: '#FFF',
    fontWeight: '700'
  },
  linkRow: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative'
  },
  linkArrow: {
    width: 10,
    height: 19,
    position: 'absolute',
    right: 20
  },
});

module.exports = Home;
