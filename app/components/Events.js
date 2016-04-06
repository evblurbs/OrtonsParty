'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../ExScreen');
let Countdown = require('./Countdown');

class Events extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Events"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/200713_504193680090_839_n.jpg?oh=9017baa31f37fdc47de6dc449dadfa0f&oe=57787D86'}}
          style={styles.image}>

        </Image>
        <Countdown toDate={1460185200000} title="Countdown until the next event. May the odds be in your favor." />
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Events</Text>
          <Text style={styles.description}>Check back here for events. Each event will be scored. You will be competing for the most coveted prize in the <Text style={styles.bold}>Ortinistic Society</Text>.</Text>
        </View>
      </ExScreen>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'cover'
  },
  innerWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 16
  },
  description: {
    color: '#333',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 18
  },
  bold: {
    fontWeight: '700'
  }
})

module.exports = Events;
